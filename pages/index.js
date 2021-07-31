import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'

 const Home=({results})=> {


  return(
<div>

{
  results.map((item)=>{
       return(<li key={item.userId}>
    {item.title}
  </li>);
  })
}
</div>
    )
}

export async function getServerSideProps(context){
 
  const res=await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const json=await res.json()
  return{
    props:{
      results:json
    },
  }
}

export default Home;