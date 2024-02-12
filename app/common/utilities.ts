import { Dispatch, SetStateAction } from "react"

export const onScroll = (
  position: Dispatch<SetStateAction<number>> | undefined
) => {
  position && position(window.scrollY)
}
