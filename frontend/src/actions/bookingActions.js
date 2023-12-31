import axios from "axios"
import { BOOKING_LIST_FAIL, BOOKING_LIST_REQUEST, BOOKING_LIST_SUCCESS } from "../constants/bookingsConstants"

export const listBookings = () => async (dispatch) => {
      try {
            dispatch({
                  type: BOOKING_LIST_REQUEST,
            })

            const config = {
                  headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token}`,
                  },
            }

            const { data } = await axios.get(`/api/booking/allBookings`, config)

            dispatch({
                  type: BOOKING_LIST_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: BOOKING_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}