'use client'
export default async function sleep(timer: number) {
     return new Promise((resolve) => setInterval(resolve, 1000 * timer))  
}