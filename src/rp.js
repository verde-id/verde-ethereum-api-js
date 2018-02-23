///////////
// Main //
///////////

/**
 * Send consent request to a given identifier
 * @param  {string} identifier - Identifier (could be any identifier registered with the system)
 * @param  {Object} requestMessage - 
 * @param  {Object} requestMessage.metadata - 
 * @param  {string} requestMessage.bodyMessage - 
 * @param  {Object} minLoa - 
 * @param  {number} minLoa.minIal - 
 * @param  {number} minLoa.minAal - 
 * @param  {number} minAuthenticationCount - 
 * @param  {number} timeout - 
 * @return {string} Request ID
 */
export const sendRequestToId = (identifier, requestMessage, minLoa, minAuthenticationCount, timeout) => {

};

/**
 * Send consent request to a given identifier at specified IDP(s)
 * @param  {Array} idpList - List of IDPs
 * @param  {string} identifier - Identifier (could be any identifier registered with the system)
 * @param  {Object} requestMessage - 
 * @param  {Object} requestMessage.metadata - 
 * @param  {string} requestMessage.bodyMessage - 
 * @param  {Object} minLoa - 
 * @param  {number} minLoa.minIal - 
 * @param  {number} minLoa.minAal - 
 * @param  {number} minAuthenticationCount - 
 * @param  {number} timeout - 
 * @return {string} Request ID
 */
export const sendRequestToIdAtIdp = (idpList, identifier, requestMessage, minLoa, minAuthenticationCount, timeout) => {

};

export const sendRequestToIdAsync = (identifier, requestMessage, callbackUrl, minLoa, minAuthenticationCount, timeout) => {

};

export const sendRequestToIdAtIdpAsync = (idpList, identifier, requestMessage, callbackUrl, minLoa, minAuthenticationCount, timeout) => {

};

export const getRequestStatus = (requestId) => {

};

export const sendDataRequestToId = (identifier, requestMessage, minLoa, minAuthenticationCount, timeout, asServiceList) => {

};

export const sendDataRequestToIdAtIdp = (idpList, identifier, requestMessage, minLoa, minAuthenticationCount, timeout, asServiceList) => {

};

export const sendDataRequestToIdAsync = (identifier, requestMessage, callbackUrl, minLoa, minAuthenticationCount, timeout, asServiceList) => {

};

export const sendDataRequestToIdAtIdpAsync = (idpList, identifier, requestMessage, callbackUrl, minLoa, minAuthenticationCount, timeout, asServiceList) => {

};

export const getRequestData = (requestId) => {

};

///////////
// Other //
///////////

export const suppressCallback = (requestId) => {

};
