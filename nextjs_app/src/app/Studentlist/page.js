
'use client'

import Link from "next/link"

export const Studentlist = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/Student/1">1</Link>
            </li>
            <li>
            <Link href="/Student/2">2</Link>
            </li>
            <li>
            <Link href="/Student/3">3</Link>
            </li>
        </ul>
    </div>
  )
}
export default Studentlist