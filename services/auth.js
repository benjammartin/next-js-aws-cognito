import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CookieStorage,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

function toObject(array) {
  let values = {};
  for (let i = 0; array.length > i; i++) {
    values = {
      ...values,
      [array[i].getName()]: array[i].getValue(),
    };
  }
  return values;
}

export const createUser = (() => {
  let userPool = new CognitoUserPool({
    UserPoolId: process.env.NEXT_PUBLIC_COGNITO_POOL_ID,
    ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    Storage: new CookieStorage({
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      secure: false,
      path: "/",
    }),
  });
  return {
    signup: (firstname, lastname, email, password) => {
      var attributeList = [];
      var dataName = {
        Name: "name",
        Value: firstname,
      };

      var dataFamilyName = {
        Name: "family_name",
        Value: lastname,
      };
      var attributeName = new CognitoUserAttribute(dataName);
      var attributeFamilyName = new CognitoUserAttribute(dataFamilyName);
      attributeList.push(attributeName);
      attributeList.push(attributeFamilyName);
      return new Promise((resolve, reject) => {
        userPool.signUp(email, password, attributeList, null, function (
          err,
          result
        ) {
          if (err) {
            reject(err);
            return;
          }
          resolve(result.user);
        });
      });
    },
    confirm: (email, code) => {
      var userData = {
        Username: email,
        Pool: userPool,
      };
      var cognitoUser = new CognitoUser(userData);
      return new Promise((resolve, reject) => {
        cognitoUser.confirmRegistration(code, true, function (err, result) {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
    },
    resend: (email) => {
      var userData = {
        Username: email,
        Pool: userPool,
      };
      var cognitoUser = new CognitoUser(userData);
      return new Promise((resolve, reject) => {
        cognitoUser.resendConfirmationCode(function (err, result) {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
    },
    signin: (email, password, req) => {
      var authenticationData = {
        Username: email,
        Password: password,
      };
      var authenticationDetails = new AuthenticationDetails(authenticationData);
      var userData = {
        Username: email,
        Pool: userPool,
        Storage: new CookieStorage({
          domain: process.env.NEXT_PUBLIC_DOMAIN,
          secure: false,
        }),
      };
      var cognitoUser = new CognitoUser(userData);
      return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: (result) => {
            resolve(result);
          },
          onFailure: (err) => reject(err),
        });
      });
    },
    current: () => {
      return userPool.getCurrentUser();
    },
    hasSession: () => {
      return new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser();
        if (!user) resolve(false);
        user.getSession((err, session) => {
          console.log(session);
          return err
            ? reject(false)
            : session.isValid()
            ? resolve(true)
            : reject(false);
        });
      });
    },
    logout: () => {
      return new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser();
        if (!user) reject("User is not defined");
        resolve(user.signOut());
      });
    },
  };
})();

/**
 * user.getUserAttributes(function (err, attributes) {
            if (err) {
              reject(false, null)
            } else {
              resolve({
                connected: true,
                user: toObject(attributes)
              })
            }
          });
 */
