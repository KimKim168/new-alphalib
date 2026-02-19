import SearchForAuther from "./Search/SearchForAuther";
import SortCharacter from "./SortCharacter";

const teamMembers = [
  { name: "Sokun Channary", title: "Founder & CEO", imageUrl: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Rithy Vannak", title: "Engineering Manager", imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Srey Pov", title: "Product Manager", imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Visal Chan", title: "LibraryDataFrontPage Developer", imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sophea Kim", title: "Backend Developer", imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Pisey Chhoeun", title: "Product Designer", imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Ratanak Meas", title: "UX Researcher", imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sokha Phan", title: "Customer Success", imageUrl: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Chenda Ly", title: "Marketing Lead", imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Vichea Sok", title: "Sales Manager", imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Kong Bunchhoeun", title: "HR Manager", imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Ratha Chea", title: "Finance Manager", imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sokleng Peou", title: "Content Writer", imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Vanna Hong", title: "QA Engineer", imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Preah Botumthera Som", title: "UI Designer", imageUrl: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Rith Sok", title: "DevOps Engineer", imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Srey Neang", title: "Customer Support", imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Piseth Lim", title: "Data Analyst", imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sokha Rith", title: "Project Manager", imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Channa Vong", title: "Business Analyst", imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const Auther = () => {
  return (
    <div className="py-12">
      <div className="px-3 sm:px-10 xl:px-20">
        <div className="mx-auto text-start">
          <p className="text-xl font-semibold text-muted-foreground uppercase">Our Auther</p>
          <p className="mt-1 text-base text-muted-foreground">
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </p>
        </div>
          <div className='flex items-center justify-center gap-4'>
                <div className='flex-1 mt-4'><SortCharacter/></div>
                  <div className='mt-4 w-full'><SearchForAuther/></div>
            </div>
        <div className="mx-auto mt-12 grid max-w-screen-2xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3  lg:grid-cols-6 xl:grid-cols-7">
          {teamMembers.map((member) => (
            <a href="/user-name" key={member.name} className="flex flex-col items-center p-2 transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                className="h-28 w-28 rounded-full object-cover ring-2 ring-gray-300 hover:ring-blue-300 ring-offset-4 ring-offset-white"
                src={member.imageUrl}
                alt={member.name}
                width={112}
                height={112}
              />
              <div className="text-center mt-6">
                <h3 className="text-base dark:text-[#1d8aff] font-semibold leading-6 tracking-tight text-[#002349]">{member.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auther;