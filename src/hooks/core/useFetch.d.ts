export type TExecuteGenericParams = IExecuteUserPassedMethods<any> & {
    path: string
}

export type TExecuteGetParams = TExecuteGenericParams & {
    method: 'GET'
}

export type TExecutePostParams = TExecuteGenericParams & {
    method: 'POST'
    body: {
        [keyName: string]: any
    }
}

export type TExecuteParams = TExecuteGetParams | TExecutePostParams

export interface IRequestResponse<ResponseType> {
    data?: ResponseType
    error?: any
    isLoading: boolean
}

export interface IExecuteUserPassedMethods<ResponseType> {
    callbackAfterSuccess?: (data?: ResponseType) => void
}
