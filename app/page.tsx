"use client"
import First from "./components/first"
import Second from "./components/second"
import Third from "./components/Third"
import PositionMenu from "./components/position"

export default function Home() {
  return (
    <>
      <PositionMenu />
      <First />
      <Second />
      <Third />
    </>
  )
}
