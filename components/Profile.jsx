const Profile = ({ user }) => {
  return (
    <div>
      <section className="border p-3 rounded border-gray-700 my-6">
        <p className="text-gray-300 text-xs my-4">
          ssan93 / README.<span className="text-gray-500">md</span>
        </p>
        <img className="mb-2" src="https://i.imgur.com/DmIYUON.png" alt="Steven-banner"/>
        <p align='center'><b>5th-year Computer Science Student at UTBM at Belfort</b></p> 
        <p align='center'>Looking for a 3-month internship from February to May 2023</p> 
      </section>
    </div>
  );
};

export default Profile;
