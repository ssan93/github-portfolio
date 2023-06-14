export const Profile = ({ user, Text }) => {
  return (
    <div>
      <section className="border p-3 rounded border-gray-700 my-6">
        <p className="text-gray-300 text-xs my-4">
          ssan93 / README.<span className="text-gray-500">md</span>
        </p>
        <img
          className="mb-2"
          src="https://i.imgur.com/1fn97U1.png"
          alt="Steven-banner"
        />
        <p align="center">
          <b>
            <Text tid="studentPresentation" />
          </b>
        </p>
        <p align="center">
          <Text tid="internshipDemand" />
        </p>
      </section>
    </div>
  );
};
