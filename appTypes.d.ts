interface LocationData {
  hash: string
  /**
   * Epoch time
   */
  time: number
}

interface BaseRequest {
  deviceId: string
}

interface SubmitLocationDataRequest extends BaseRequest {
  locations: LocationData[]
}

interface SubmitPushIdRequest extends BaseRequest {
  pushId: string
}
