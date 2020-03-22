export interface LocationData {
  hash: string
  /**
   * Epoch time
   */
  time: number
}

export interface BaseRequest {
  deviceId: string
}

export interface SubmitLocationDataRequest extends BaseRequest {
  locations: LocationData[]
}

export interface SubmitPushIdRequest extends BaseRequest {
  pushId: string
}
