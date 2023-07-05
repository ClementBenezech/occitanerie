/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export const AppHeader = () => {
    return (
    <header className="app-header">
    <div>L'Occitanerie</div>
      <div className='menu-container'>
        <Link href="/home">Home</Link>
        <Link href="/animaux">Les animaux</Link>
        <Link href="/about">La fermière</Link>
    </div>
    </header>
    )
  
    
}


