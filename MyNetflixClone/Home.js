import './MyNetflixClone.css';

const Home = () => {
    return <div>
<div className='home'>
{/* 
<div className='text'>
<h5>Watch anywhere.Cancel anytime.  <br/>
Ready to watch? Enter your email to <br/>
create or restart your membership. </h5>
</div> */}

<center>

<div  className='home_text'>

<h1 className='h1'>Unlimited movies, TV  <br/>shows
and more.</h1>  
<h2>Watch anywhere.Cancel anytime. </h2> <br/>
<h3>Ready to watch? Enter your email to 
 create or restart your membership. </h3>
<br/>

<tr>
        <span>
    <td>
             <input className='input' placeholder='Email address'></input>
 </td>
 <td>
 <button className='btn'>Get Started &gt;</button>
 </td>
 </span>


</tr>

</div>
</center>

</div>
</div>

}
export default Home;