  import ReadMore from '../Buttons/ReadMore';

  const magazineData = [
    {
          title: 'វាចាអ្នកចងក្រង និពន្ធ​ និងថតរូបក្នុងឯកសារមេរៀនថតរូប',
          description:
              'នេះជាឯកសារបង្រៀនថតរូបដែលចងក្រងដោយលោក មឿន ញាណ ដែលជាអ្នកថតរូបមានស្នាដៃដ៏ចំណាន។ លោកបានផ្ញើមេរៀនមកក្នុងគោលបំណងចែករំលែកជូនដល់សាធារណជនដែលស្រឡាញ់ការថតរូប ដើម្បីមានមូលដ្ឋានគ្រឹះក្នុងការថតរូបឱ្យបានល្អ។លោកធ្លាប់បានមកបង្រៀនសិក្ខាកាមថតរូបនៅពុទ្ធសាសនបណ្ឌិត្យតាមរយៈកិច្ចសហការជាមួយក្លឹបអ្នកកាសែតកម្ពុជា',
          mainImage: '/assets/buddhist/magazine2.jpg',
      },
      {
          title: 'វិចិត្រសិល្បៈទាន់សម័យ',
          description:
              'សៀវភៅនេះបង្ហាញពីសិល្បៈទំនើប និងគំនិតប្លែកៗ ដែលបានបង្កើតដោយសិល្បករ ស្ទើរតែជាផ្នែកនៃការបង្ហាញគំនិតច្នៃប្រឌិត និងបច្ចេកវិទ្យាថ្មីៗ។ អ្នកអាចស្វែងយល់ពីស្ទីល និងរចនាបទថ្មីៗទាំងក្នុងប្រទេស និងអន្តរជាតិ។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
      {
          title: 'ទេសចរណ៍ និងវប្បធម៌',
          description:
              'សៀវភៅនេះនាំអ្នកទៅកាន់កន្លែងទេសចរណ៍ដ៏សំខាន់ និងវប្បធម៌ខ្មែរដែលមានតម្លៃប្រវត្តិសាស្ត្រ។ អ្នកអាចស្វែងយល់ពីប្រពៃណី, ពិធីបុណ្យ, និងរបៀបរស់នៅក្នុងសហគមន៍ជាតិខ្មែរ។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
      {
          title: 'ការរចនាផ្ទះ និងផែនទី',
          description:
              'សៀវភៅនេះផ្តល់ព័ត៌មានលម្អិតអំពីការរចនាផ្ទះ និងផែនទីសម្រាប់អ្នកដែលចូលចិត្តរចនាបែបសិល្បៈ និងសុវត្ថិភាព។ មានគំនូរ, គំរូផ្ទះ, និងអត្ថបទជំនួយក្នុងការរចនា។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
      {
          title: 'បរិស្ថាន និងធម្មជាតិ',
          description:
              'អត្ថបទ និងរូបភាពបង្ហាញពីបរិស្ថាន និងធម្មជាតិដ៏ស្រស់ស្អាតនៅកម្ពុជា។ អ្នកអាចស្វែងយល់ពីការរក្សាបរិស្ថាន, គ្រឿងផ្សំធម្មជាតិ, និងគន្លឹះក្នុងការអភិរក្សធម្មជាតិ។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
      {
          title: 'អាហារ និងវប្បធម៌ផ្ទះ',
          description: 'សៀវភៅនេះបង្ហាញពីម្ហូបប្រពៃណីខ្មែរ និងវប្បធម៌ផ្ទះ។ អ្នកអាចរៀនពីរបៀបធ្វើម្ហូបខ្មែរ និងស្វែងយល់ពីប្រពៃណីជាតិខ្មែរ។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
      {
          title: 'វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា',
          description:
              'សៀវភៅនេះផ្តល់អត្ថបទថ្មីៗអំពីវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា។ មានការពិភាក្សាអំពីចំណេះដឹងថ្មី, សារព័ត៌មានវិទ្យាសាស្ត្រ, និងបច្ចេកវិទ្យាថ្មីៗក្នុងជីវិតប្រចាំថ្ងៃ។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
      {
          title: 'កីឡា និងសុខភាព',
          description:
              'សៀវភៅនេះផ្តល់ព័ត៌មានលម្អិតអំពីកីឡា និងសុខភាព។ អ្នកអាចស្វែងយល់ពីវិធីហាត់ប្រាណ, អាហារសម្រន់, និងការថែរក្សាសុខភាពទូទៅសម្រាប់ជីវិតប្រចាំថ្ងៃ។',
          mainImage: '/assets/buddhist/books/magazine1.jpg',
      },
  ];

  const MagazineCardItem = ({ item }) => {
      return (
          <div className="mx-auto mb-6 max-w-md transform overflow-hidden rounded bg-white dark:bg-black shadow-md dark:border transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {/* Header */}
              <header className="p-4">
                  <h3 className="text-lg font-medium line-clamp-2 ">{item.title}</h3>
              </header>

              {/* Image */}
              <section className="overflow-hidden">
                  <img
                      src={item.mainImage}
                      alt={item.title}
                      className="aspect-[9/9] w-full transform object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <p className="p-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{item.description}</p>
              </section>

              {/* Footer */}
              <footer className="p-4">
                  <ReadMore item="/detail/1" />
              </footer>
          </div>
      );
  };

  const MagazineCard = () => {
      return (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {magazineData.map((item, idx) => (
                  <MagazineCardItem key={idx} item={item} />
              ))}
          </div>
      );
  };

  export default MagazineCard;
