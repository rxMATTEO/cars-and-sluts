import {DocumentNode} from "graphql/language";

export const request = async <Response, Request = undefined>(query: DocumentNode, variables?: Request, isNewApi?: boolean, isLazy?: boolean) => {
  let siteId = null
  let clientId = 'default'
  if (isNewApi) {
    clientId = 'new'
    siteId = 1
  } else {
    siteId = 173
  }

  let assignVariables = {
    site_id: siteId
  }
  let params = {...assignVariables, ...variables}
  let removeEmptyParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));

  return isLazy ? useLazyAsyncQuery<Response>({
    query,
    variables: removeEmptyParams,
    clientId
  }) : useAsyncQuery<Response>({query, variables: removeEmptyParams, clientId})
}
export const postRequest = async <Response, Request = undefined>(query: DocumentNode, variables?: Request, isNewApi?: boolean) => {
  let siteId = null
  let clientId = 'default'
  if (isNewApi) {
    clientId = 'new'
    siteId = 2
  } else {
    siteId = 173
  }

  let assignVariables = {
    site_id: siteId
  }
  let params = {...assignVariables, ...variables}
  let removeEmptyParams = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null))
  return useMutation<Response>(query, {variables: removeEmptyParams, clientId});
}
