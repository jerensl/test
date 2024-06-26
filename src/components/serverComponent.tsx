import React from 'react'
import fs from "fs/promises";
import sleep from '@/utils/utilServer';

async function getContent() {
    return (await fs.readFile("./src/components/content.txt")).toString()
}

export default async function Server() {
  
  const hello = await getContent()
  return (
    <div>
        Something to say from server:
        {hello}
    </div>
  )
}
