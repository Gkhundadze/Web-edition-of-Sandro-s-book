const texts = [
  {
    text: "სანდრო ასათიანის წიგნი „ქაოსიდან კოსმოსამდე“ მცირე მოთხრობების, მე ვიტყოდი, იგავების ნაკრებია. თანამედროვე მანუსკრიპტი, სადაც ზოგან მინიშნებებით, ზოგან პირდაპირ მითითებულია ფრაზები, სურათ-ხატები და სიტყვები, რომლებიც სატრანზიტო პუნქტების დანიშნულებას ასრულებს <span>terra incognita</span>-ში, ციფრულ ტერიტორიებზე, სადაც ან ჯერ არავის დაუდგამს ფეხი, ან უკვე მანდაა და სჭირდება ფსიქოგეოგრაფიული, ინტერაქტიული გზამკვლევი, „მინიშნებები“, რათა იპოვოს „ჭეშმარიტი მასწავლებელი“ ან უსაფრთხო გზა კომპიუტერული თამაშის საბოლოო ტურისკენ, სადაც მისთვის უამრავ საიდუმლოს აეხდება ფარდა.",
  },
  {
    text: "„ცხოვრება რაღაცით კომპიუტერულ თამაშს ჰგავს. თამაშის მთავარი გმირის მოულოდნელობებით სავსე თავგადასავალი იწყება. მას მუდამ არჩევანის გაკეთება უწევს. თითოეულ არჩევანს, თავის მხრივ, ახალი მოულოდნელობა მოსდევს. არავინ იცის, სად მიიყვანს მას თამაში, გასხივოსნებულ გამარჯვებამდე თუ მოულოდნელ დასასრულამდე.",
  },
  {
    text: "ციფრულ ტექნოლოგიებს, ისე, როგორც არასდროს, სჭირდება თავისი, ახალი მითოსი. მიუხედავად იმისა, რომ ტექნოლოგიები სინათლის სიჩქარით ვითარდება, ჩვენ, ადამიანები, ჯერ კიდევ ვცხოვრობთ უძველესი არაცნობიერი არქეტიპების რეალობაში, სანდრო ცდილობს, ეს არქეტიპები ციფრულ სამყაროში აღმოაჩინოს და, თუ შესაძლებელია, მათი ახალი, თანამედროვე ტექნოლოგიებს მისადაგებული ვერსია გამოიგონოს. <span>«hevel havalim»</span> — გაკვრით ამბობს ამ ფრაზას კრეატიული რეკლამის შემქმნელი და ჩვენ გვესმის ექო ათასეული წლების წინ დაწერილი ტექსტისა. სინამდვილეში, კაცობრიობის არაცნობიერში ჩაკოდირებული არქეტიპები დღემდე ფუნქციონირებს ჩვენს სიღრმეებში, მთავარი ისაა, როგორ შევძლებთ მათ გამოყენებასა და მანიფესტაციას ახალ, ციფრულ სამყაროში.",
  },
  {
    text: "თავად სათაური „ქაოსიდან კოსმოსამდე“ მიგვანიშნებს კიდევ უფრო საინტერესო რამეზე: ძველ მითოსებში პირვანდელი ქაოსიდან (რომელიც თავის თავში პოტენციურ კოსმოსებს უკვე შეიცავს) – კოსმოსს (წესრიგს), როგორც წესი, კულტურული გმირები ან დემიურგები ქმნიან.",
  },
  {
    text: "ისინი, ვინც დღეს კოდს სწავლობს, ციფრულ სამყაროებს, ჩეთბოტებს, აპლიკაციებსა და პროგრამებს ქმნიან – სწორედ რომ ახალგაზრდა დემიურგები არიან, პატარა ღმერთები, რომლებიც ქაოსს აწესრიგებენ, რათა მისგან კოსმოსი, ახალი წესრიგი შექმნან.",
  },
  {
    text: "ამგვარად, ეს წიგნი ამ ახალგაზრდა დემიურგებისთვისაა განკუთვნილი.",
  },
  {
    text: "ალქიმიკოსებისა თუ ჯადოქრების ყველა ძველი აუხდენელი ოცნება, დღეს ამ დემიურგების კლავიატურებზე იქმნება, შელოცვები კოდებმა შეცვალა, ეზოტერიკული კაბალისტური გამოთვლები – კომპიუტერების მათემატიკური გამოთვლების სიმძლავრემ, ანგელოზების (რაც ბერძნულად ნიშნავს „მაცნეს, მესენჯერს) გამოცხადებები – ჩეთბოტებმა და ვირტუალურმა რეალობამ, ინიციაციის პრაქტიკები – სახელმწიფო „ლევიათანთან“ შეხვედრამ, მედიტაციები – კომპიუტერულმა თამაშებმა, ღვთაებები – ხელოვნური ინტელექტის ვირტუალურმა არსებებმა, ტაძრები – სერვერებმა.",
  },
  {
    text: "„ახალგაზრდა ჯადოქრის თვალწინ, კომპიუტერის ეკრანზე მის მიერ შექმნილი სამყარო იყო გამოსახული“, წერს სანდრო და ოსტატურად ჟონგლიორობს უძველესი არქეტიპებითა და ულტრათანამედროვე ტექნოლოგიებით.",
  },
  {
    text: "წიგნის მთავარი ხიბლი სწორედ ამ უძველესი არქეტიპებისა და ტექნოლოგიური სინგულარობისკენ მიმავალი კაცობრიობის ერთმანეთთან შეზავებაა, ტექსტი ყოველ წინადადებაში იტოტება რამდენიმე სატრანზიტო პუნქტად, სადაც სხვადასხვა საგანძურია შემონახული. თანამედროვე დემიურგის თუ კულტურული გმირის მისიაა, არსებული ქაოსიდან ის კოსმოსი შექმნას, სადაც ყველანი სრულიად ახალ, შეუცნობელ, საიდუმლოებებითა და გამოცხადებებით სავსე რეალობაში მოვხვდებით. ისტორიის არცერთ ეტაპზე ჩვენ არ გვქონია მსგავსი ილუმინაციური, ღვთაებრივი შესაძლებლობები.",
  },
  {
    text: "ახალგაზრდა დემიურგო, ნუ შეუშინდები მახეებსა და ხაფანგებს, რომელსაც სოციალური თუ კულტურული პროგრამირება გიდებს წინ, გაშიფრე ეს მანუსკრიპტი და გაბედე შექმნა რაღაც რევოლუციური, რაღაც დიდი, რაღაც მაგიური, რაც შეცვლის „რეალობას“, ისეთს, როგორსაც მას ვიცნობთ, ვინაიდან მოვიდა დრო, თავს მოხვეული რეალობა რადიკალურად შეიცვალოს და ჩვენ შევაბიჯოთ ტექნოლოგიური მაგიის სამყაროში. ყველაფერი შენს ხელთაა, კლავიატურაა შენს ხელთ.",
  },
  {
    text: "სანდრო ასათიანის ეს წიგნი კი გზამკვლევია ამ საოცარ მოგზაურობაში.",
  }
]

const prefaceTexts = document.querySelector('.preface-texts');
let textContent = '';
texts.forEach(currentValue => {
  textContent += `<p> ${currentValue.text} </p>`;
});
prefaceTexts.innerHTML = textContent;