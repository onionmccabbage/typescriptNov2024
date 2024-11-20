import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./profile_component";
// const Profile = ()=>{
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

const Gallery = ()=>{
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

const Home=()=>{
  const w = 180
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Welcome</h2>
        <p className='oops'></p>
        <Gallery/>
      </main>
    </div>
  );  
}
export default Home
