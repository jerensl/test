'use client'
import React, { useEffect, useState } from 'react'

import sleep from "@/utils/utils"

export default function Client() {
  const [display, setDisplay] = useState("")

  useEffect(() => {
    const someExpensiveOperation = async () => {
      if (window !== undefined) {
        await sleep(10)
        setDisplay("After expensive operation from client components done")
      }
      
    }
    someExpensiveOperation()
  },[])

  return (
    <div>
        Start of expensive operation from client components: <br/>
        {display}
    </div>
  )
}
