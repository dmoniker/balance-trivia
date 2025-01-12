    // Define the trivia questions

const questions = [

//////////////////GEOGRAPHY 

  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Perth"],
    answer: "Canberra",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which African country is known as 'The Pearl of Africa'?",
    options: ["Kenya", "Ethiopia", "Uganda", "Tanzania"],
    answer: "Uganda",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the longest river in South America?",
    options: ["Amazon River", "Orinoco River", "Paraná River", "Magdalena River"],
    answer: "Amazon River",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which two countries share the longest international border?",
    options: ["Canada and the United States", "Russia and China", "India and Pakistan", "Chile and Argentina"],
    answer: "Canada and the United States",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is known as the 'Eternal City'?",
    options: ["Rome", "Athens", "Paris", "Cairo"],
    answer: "Rome",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is home to the ancient city of Petra?",
    options: ["Egypt", "Greece", "Jordan", "Lebanon"],
    answer: "Jordan",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the highest mountain in Africa?",
    options: ["Mount Kilimanjaro", "Mount Kenya", "Mount Meru", "Mount Stanley"],
    answer: "Mount Kilimanjaro",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is the largest in terms of land area?",
    options: ["Russia", "Canada", "China", "United States"],
    answer: "Russia",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the Angkor Wat temple complex?",
    options: ["Vietnam", "Thailand", "Cambodia", "Myanmar"],
    answer: "Cambodia",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is located at the confluence of the Danube and Sava rivers?",
    options: ["Budapest", "Belgrade", "Vienna", "Prague"],
    answer: "Belgrade",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    answer: "Japan",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which two countries share the Iguazu Falls?",
    options: ["Argentina and Brazil", "Peru and Ecuador", "Colombia and Venezuela", "Bolivia and Paraguay"],
    answer: "Argentina and Brazil",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is located on two continents?",
    options: ["Istanbul", "Moscow", "Cairo", "Dubai"],
    answer: "Istanbul",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which river is often called the 'Cradle of Chinese Civilization'?",
    options: ["Yangtze River", "Yellow River", "Mekong River", "Ganges River"],
    answer: "Yellow River",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Maldives", "San Marino"],
    answer: "Vatican City",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which U.S. state is known as the 'Sunshine State'?",
    options: ["California", "Texas", "Florida", "Hawaii"],
    answer: "Florida",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
    answer: "Buenos Aires",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its tulips and windmills?",
    options: ["Denmark", "Belgium", "Netherlands", "Austria"],
    answer: "Netherlands",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which South American country is the most populous?",
    options: ["Colombia", "Brazil", "Argentina", "Mexico"],
    answer: "Brazil",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the highest mountain in North America?",
    options: ["Mount McKinley (Denali)", "Mount Logan", "Mount Foraker", "Mount St. Elias"],
    answer: "Mount McKinley (Denali)",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    options: ["Australia", "Indonesia", "Philippines", "Papua New Guinea"],
    answer: "Australia",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the ruins of Machu Picchu?",
    options: ["Peru", "Bolivia", "Ecuador", "Chile"],
    answer: "Peru",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is known as the 'City of Love'?",
    options: ["Venice", "Rome", "Paris", "Florence"],
    answer: "Paris",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which river is considered the lifeline of Egypt?",
    options: ["Nile River", "Congo River", "Zambezi River", "Niger River"],
    answer: "Nile River",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of South Korea?",
    options: ["Busan", "Incheon", "Seoul", "Daegu"],
    answer: "Seoul",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its fjords and Vikings?",
    options: ["Sweden", "Iceland", "Norway", "Denmark"],
    answer: "Norway",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country is Mount Kilimanjaro located?",
    options: ["Kenya", "Tanzania", "Uganda", "Rwanda"],
    answer: "Tanzania",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the largest island in the Mediterranean Sea?",
    options: ["Sardinia", "Sicily", "Cyprus", "Crete"],
    answer: "Sicily",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is known for its famous carnival in Rio de Janeiro?",
    options: ["Argentina", "Colombia", "Peru", "Brazil"],
    answer: "Brazil",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is located at the mouth of the Amazon River?",
    options: ["Belem", "Manaus", "Rio de Janeiro", "Salvador"],
    answer: "Belem",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the capital of Turkey?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: "Ankara",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which African country is known as the 'Rainbow Nation'?",
    options: ["Namibia", "Botswana", "South Africa", "Zimbabwe"],
    answer: "South Africa",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "In which country would you find the ancient city of Athens?",
    options: ["Greece", "Italy", "Spain", "Egypt"],
    answer: "Greece",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Kalahari Desert"],
    answer: "Sahara Desert",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is known as the 'City of Seven Hills'?",
    options: ["Lisbon", "Barcelona", "Madrid", "Rome"],
    answer: "Rome",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is the second-largest in terms of land area?",
    options: ["United States", "China", "Canada", "Brazil"],
    answer: "Canada",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    answer: "Cairo",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known as the 'Land Down Under'?",
    options: ["New Zealand", "Australia", "Fiji", "Papua New Guinea"],
    answer: "Australia",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is located on the Bosporus Strait?",
    options: ["Athens", "Istanbul", "Rome", "Barcelona"],
    answer: "Istanbul",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is home to the iconic Taj Mahal?",
    options: ["India", "Nepal", "Bhutan", "Maldives"],
    answer: "India",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the Galapagos Islands?",
    options: ["Colombia", "Venezuela", "Ecuador", "Peru"],
    answer: "Ecuador",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the capital of Canada?",
    options: ["Vancouver", "Ottawa", "Toronto", "Montreal"],
    answer: "Ottawa",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which South American country is the largest in terms of land area?",
    options: ["Brazil", "Peru", "Argentina", "Colombia"],
    answer: "Brazil",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the official language of Brazil?",
    options: ["Portuguese", "Spanish", "Italian", "English"],
    answer: "Portuguese",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is located on the Arabian Peninsula?",
    options: ["Dubai", "Abu Dhabi", "Riyadh", "Doha"],
    answer: "Riyadh",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which river is considered the birthplace of ancient Indian civilization?",
    options: ["Ganges River", "Indus River", "Brahmaputra River", "Yamuna River"],
    answer: "Indus River",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Valencia", "Seville"],
    answer: "Madrid",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its delicious Swiss chocolates?",
    options: ["Switzerland", "Belgium", "France", "Austria"],
    answer: "Switzerland",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country is Mount Everest located?",
    options: ["India", "China", "Nepal", "Bhutan"],
    answer: "Nepal",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is known as the 'City of Lights'?",
    options: ["London", "Paris", "New York City", "Tokyo"],
    answer: "Paris",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which river is considered the lifeline of India?",
    options: ["Ganges River", "Yamuna River", "Brahmaputra River", "Godavari River"],
    answer: "Ganges River",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Marseille", "Lyon", "Nice"],
    answer: "Paris",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the ruins of the Colosseum?",
    options: ["Spain", "Italy", "Greece", "Turkey"],
    answer: "Italy",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the largest lake in Africa?",
    options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Chad"],
    answer: "Lake Victoria",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is located on the Vltava River?",
    options: ["Prague", "Vienna", "Budapest", "Bratislava"],
    answer: "Prague",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which Asian country is known as the 'Land of Smiles'?",
    options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
    answer: "Thailand",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is known for its famous Oktoberfest?",
    options: ["Austria", "Germany", "Switzerland", "Czech Republic"],
    answer: "Germany",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    answer: "Rome",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is home to the famous Great Wall?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    answer: "China",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the ancient city of Istanbul?",
    options: ["Turkey", "Greece", "Egypt", "Israel"],
    answer: "Turkey",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is known as the 'Windy City'?",
    options: ["New York City", "Chicago", "Los Angeles", "San Francisco"],
    answer: "Chicago",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which river forms part of the border between the United States and Mexico?",
    options: ["Mississippi River", "Colorado River", "Rio Grande", "Missouri River"],
    answer: "Rio Grande",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    answer: "Tokyo",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its stunning landscapes and Lord of the Rings films?",
    options: ["Australia", "New Zealand", "Fiji", "Samoa"],
    answer: "New Zealand",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which European country is known for its delicious pastries and windmills?",
    options: ["Belgium", "France", "Denmark", "Netherlands"],
    answer: "Denmark",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "In which country is the Kruger National Park located?",
    options: ["Namibia", "South Africa", "Zimbabwe", "Botswana"],
    answer: "South Africa",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "Madagascar", "Borneo", "New Guinea"],
    answer: "Greenland",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is located on the Rhine River?",
    options: ["Cologne", "Frankfurt", "Amsterdam", "Zurich"],
    answer: "Cologne",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is known for its delicious pizza and pasta?",
    options: ["Italy", "Spain", "Greece", "Portugal"],
    answer: "Italy",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which African country is known for its pyramids and Nile River?",
    options: ["Morocco", "Egypt", "Algeria", "Sudan"],
    answer: "Egypt",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"],
    answer: "Beijing",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is located on the Bosphorus Strait?",
    options: ["Athens", "Istanbul", "Rome", "Barcelona"],
    answer: "Istanbul",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which river forms part of the border between the United States and Canada?",
    options: ["Mississippi River", "Colorado River", "Columbia River", "St. Lawrence River"],
    answer: "St. Lawrence River",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Bangalore"],
    answer: "Delhi",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "In which country is the Serengeti National Park located?",
    options: ["Kenya", "Tanzania", "Uganda", "Rwanda"],
    answer: "Tanzania",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is located on the Thames River?",
    options: ["Paris", "Berlin", "London", "Amsterdam"],
    answer: "London",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its delicious Swiss cheese and watches?",
    options: ["Switzerland", "Austria", "France", "Germany"],
    answer: "Switzerland",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "What is the capital of Russia?",
    options: ["St. Petersburg", "Moscow", "Sochi", "Kazan"],
    answer: "Moscow",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its stunning landscapes and kiwi fruit?",
    options: ["Australia", "New Zealand", "Fiji", "Samoa"],
    answer: "New Zealand",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the ancient city of Cairo?",
    options: ["Egypt", "Lebanon", "Israel", "Jordan"],
    answer: "Egypt",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which city is located on the Hudson River?",
    options: ["Washington, D.C.", "Philadelphia", "Boston", "New York City"],
    answer: "New York City",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which river is considered the lifeline of Bangladesh?",
    options: ["Ganges River", "Brahmaputra River", "Mekong River", "Indus River"],
    answer: "Brahmaputra River",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    answer: "Berlin",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its famous tulip fields and windmills?",
    options: ["Germany", "Belgium", "Netherlands", "France"],
    answer: "Netherlands",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country is the Maasai Mara National Reserve located?",
    options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
    answer: "Kenya",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is located on the Tiber River?",
    options: ["Rome", "Venice", "Florence", "Naples"],
    answer: "Rome",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which country is known for its delicious pastries and chocolates?",
    options: ["Switzerland", "Belgium", "France", "Austria"],
    answer: "Belgium",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which African country is known for its wildlife and Victoria Falls?",
    options: ["Namibia", "Zambia", "Botswana", "Zimbabwe"],
    answer: "Zimbabwe",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "What is the capital of the United Kingdom?",
    options: ["Manchester", "London", "Liverpool", "Glasgow"],
    answer: "London",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its stunning landscapes and kangaroos?",
    options: ["New Zealand", "Australia", "Fiji", "Papua New Guinea"],
    answer: "Australia",
    category: "geography", 
    difficulty: "easy"
  },
  {
    question: "In which country would you find the ancient city of Tokyo?",
    options: ["Japan", "China", "South Korea", "Philippines"],
    answer: "Japan",
    category: "geography", 
    difficulty: "hard"
  },
  {
    question: "Which city is located on the Danube River?",
    options: ["Vienna", "Budapest", "Prague", "Bratislava"],
    answer: "Vienna",
    category: "geography", 
    difficulty: "hard"
  },
 
 ///////////////////////FAMOUS FIGURES

  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    options: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Jacinda Ardern"],
    answer: "Margaret Thatcher",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Which US President signed the Emancipation Proclamation?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John F. Kennedy"],
    answer: "Abraham Lincoln",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the first African-American President of South Africa?",
    options: ["Nelson Mandela", "Thabo Mbeki", "Jacob Zuma", "Cyril Ramaphosa"],
    answer: "Nelson Mandela",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the current Chancellor of Germany?",
    options: ["Angela Merkel", "Olaf Scholz", "Annalena Baerbock", "Armin Laschet"],
    answer: "Angela Merkel",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who was the first female President of Brazil?",
    options: ["Dilma Rousseff", "Fernanda Montenegro", "Jair Bolsonaro", "Michel Temer"],
    answer: "Dilma Rousseff",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Which US President served the longest term in office?",
    options: ["Franklin D. Roosevelt", "George Washington", "Donald Trump", "Ronald Reagan"],
    answer: "Franklin D. Roosevelt",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
    answer: "George Washington",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the longest-serving Prime Minister of Canada?",
    options: ["Pierre Trudeau", "Stephen Harper", "Justin Trudeau", "William Lyon Mackenzie King"],
    answer: "William Lyon Mackenzie King",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Which US President authorized the dropping of atomic bombs on Hiroshima and Nagasaki?",
    options: ["Dwight D. Eisenhower", "Harry S. Truman", "John F. Kennedy", "Richard Nixon"],
    answer: "Harry S. Truman",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the leader of the Soviet Union during World War II?",
    options: ["Joseph Stalin", "Nikita Khrushchev", "Vladimir Lenin", "Mikhail Gorbachev"],
    answer: "Joseph Stalin",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the all-time leading scorer in NBA history?",
    options: ["Kobe Bryant", "LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar"],
    answer: "Kareem Abdul-Jabbar",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Which athlete won the most gold medals in a single Olympic Games?",
    options: ["Michael Phelps", "Usain Bolt", "Simone Biles", "Carl Lewis"],
    answer: "Michael Phelps",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the fastest man in the world?",
    options: ["Usain Bolt", "Tyson Gay", "Justin Gatlin", "Yohan Blake"],
    answer: "Usain Bolt",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who won the FIFA World Cup in 2018?",
    options: ["Germany", "Argentina", "France", "Brazil"],
    answer: "France",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Which boxer is known as 'The Greatest' and 'The People's Champion'?",
    options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather Jr.", "Manny Pacquiao"],
    answer: "Muhammad Ali",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who holds the record for the most home runs in Major League Baseball?",
    options: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
    answer: "Barry Bonds",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who won the Tour de France a record seven consecutive times?",
    options: ["Miguel Indurain", "Eddy Merckx", "Lance Armstrong", "Bernard Hinault"],
    answer: "Lance Armstrong",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Which tennis player has the most Grand Slam titles in the Open Era?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"],
    answer: "Serena Williams",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the most successful Formula 1 driver of all time?",
    options: ["Ayrton Senna", "Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel"],
    answer: "Lewis Hamilton",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    answer: "Albert Einstein",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who discovered penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
    answer: "Alexander Fleming",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who proposed the heliocentric model of the solar system?",
    options: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler", "Isaac Newton"],
    answer: "Nicolaus Copernicus",
    category: "famous figures", 
    difficulty: "easy"
  },
 
  {
    question: "Who developed the first successful polio vaccine?",
    options: ["Albert Sabin", "Jonas Salk", "Louis Pasteur", "Edward Jenner"],
    answer: "Jonas Salk",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who discovered the structure of DNA?",
    options: ["James Watson", "Francis Crick", "Rosalind Franklin", "Linus Pauling"],
    answer: "James Watson",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    answer: "Alexander Graham Bell",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who formulated the theory of evolution by natural selection?",
    options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Jean-Baptiste Lamarck"],
    answer: "Charles Darwin",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who discovered radioactivity?",
    options: ["Marie Curie", "Albert Einstein", "Ernest Rutherford", "Max Planck"],
    answer: "Marie Curie",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    options: ["William Shakespeare", "George Bernard Shaw", "Arthur Miller", "Oscar Wilde"],
    answer: "William Shakespeare",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who composed the symphony known as 'Ode to Joy'?",
    options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
    answer: "Ludwig van Beethoven",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who sculpted the statue of David?",
    options: ["Michelangelo", "Auguste Rodin", "Gian Lorenzo Bernini", "Donatello"],
    answer: "Michelangelo",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who wrote the novel 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    answer: "Jane Austen",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the author of the Harry Potter book series?",
    options: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "George R.R. Martin"],
    answer: "J.K. Rowling",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who composed the musical 'Les Misérables'?",
    options: ["Andrew Lloyd Webber", "Stephen Sondheim", "Claude-Michel Schönberg", "Richard Rodgers"],
    answer: "Claude-Michel Schönberg",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Raphael", "Leonardo da Vinci", "Donatello", "Michelangelo"],
    answer: "Michelangelo",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the author of '1984' and 'Animal Farm'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    answer: "George Orwell",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is considered the father of modern sculpture?",
    options: ["Auguste Rodin", "Pablo Picasso", "Henry Moore", "Constantin Brancusi"],
    answer: "Auguste Rodin",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "John Steinbeck"],
    answer: "Harper Lee",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who composed the 'Moonlight Sonata'?",
    options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Frédéric Chopin"],
    answer: "Ludwig van Beethoven",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who painted the 'Starry Night'?",
    options: ["Vincent van Gogh", "Salvador Dalí", "Pablo Picasso", "Claude Monet"],
    answer: "Vincent van Gogh",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the author of the play 'Hamlet'?",
    options: ["William Shakespeare", "Samuel Beckett", "Anton Chekhov", "Oscar Wilde"],
    answer: "William Shakespeare",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who directed the movie 'Citizen Kane'?",
    options: ["Orson Welles", "Alfred Hitchcock", "Stanley Kubrick", "Martin Scorsese"],
    answer: "Orson Welles",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the lead vocalist of the band Queen?",
    options: ["Freddie Mercury", "Elton John", "Paul McCartney", "Mick Jagger"],
    answer: "Freddie Mercury",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who wrote the novel 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    answer: "J.D. Salinger",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who composed the ballet 'Swan Lake'?",
    options: ["Pyotr Ilyich Tchaikovsky", "Sergei Prokofiev", "Igor Stravinsky", "Richard Wagner"],
    answer: "Pyotr Ilyich Tchaikovsky",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the author of the novel 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    answer: "Leo Tolstoy",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who painted the 'Last Supper'?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    answer: "Leonardo da Vinci",
    category: "famous figures", 
    difficulty: "easy"
  },

  {
    question: "Who was the first female Prime Minister of India?",
    options: ["Indira Gandhi", "Golda Meir", "Benazir Bhutto", "Margaret Thatcher"],
    answer: "Indira Gandhi",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Which US President delivered the Gettysburg Address?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"],
    answer: "Abraham Lincoln",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the current President of France?",
    options: ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Jacques Chirac"],
    answer: "Emmanuel Macron",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the first female Secretary of State of the United States?",
    options: ["Madeleine Albright", "Condoleezza Rice", "Hillary Clinton", "Kamala Harris"],
    answer: "Madeleine Albright",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the first President of the Russian Federation?",
    options: ["Mikhail Gorbachev", "Boris Yeltsin", "Vladimir Putin", "Dmitry Medvedev"],
    answer: "Boris Yeltsin",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the current Prime Minister of Japan?",
    options: ["Shinzo Abe", "Yoshihide Suga", "Narendra Modi", "Xi Jinping"],
    answer: "Yoshihide Suga",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who was the first African-American President of the United States?",
    options: ["Barack Obama", "Joe Biden", "Kamala Harris", "Jesse Jackson"],
    answer: "Barack Obama",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the first female Chancellor of Germany?",
    options: ["Angela Merkel", "Margaret Thatcher", "Theresa May", "Jacinda Ardern"],
    answer: "Angela Merkel",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Which US President served as a movie actor before entering politics?",
    options: ["Ronald Reagan", "John F. Kennedy", "Richard Nixon", "Jimmy Carter"],
    answer: "Ronald Reagan",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who was the leader of the Indian independence movement against British rule?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Indira Gandhi"],
    answer: "Mahatma Gandhi",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who holds the record for the most goals scored in international soccer matches?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Marta"],
    answer: "Cristiano Ronaldo",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who won the gold medal in the men's 100-meter sprint at the 2016 Olympics?",
    options: ["Usain Bolt", "Justin Gatlin", "Yohan Blake", "Andre De Grasse"],
    answer: "Usain Bolt",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the only athlete to win Olympic gold in both the 100-meter and 200-meter sprints in three consecutive Olympics?",
    options: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Florence Griffith-Joyner"],
    answer: "Usain Bolt",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who won the Super Bowl in 2020?",
    options: ["Kansas City Chiefs", "San Francisco 49ers", "New England Patriots", "Los Angeles Rams"],
    answer: "Kansas City Chiefs",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the youngest person to win the FIFA Ballon d'Or?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Neymar"],
    answer: "Lionel Messi",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Which boxer held the world heavyweight title for a record 12 years and six months?",
    options: ["Muhammad Ali", "Mike Tyson", "Joe Louis", "George Foreman"],
    answer: "Joe Louis",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who won the Wimbledon men's singles title the most times?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    answer: "Roger Federer",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who is the most decorated gymnast in Olympic history?",
    options: ["Simone Biles", "Larisa Latynina", "Nadia Comăneci", "Vera Caslavska"],
    answer: "Simone Biles",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who holds the record for the most home runs in a single season in Major League Baseball?",
    options: ["Barry Bonds", "Mark McGwire", "Sammy Sosa", "Babe Ruth"],
    answer: "Barry Bonds",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who won the Formula 1 World Championship in 2020?",
    options: ["Lewis Hamilton", "Max Verstappen", "Valtteri Bottas", "Sebastian Vettel"],
    answer: "Lewis Hamilton",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who invented the first practical electric light bulb?",
    options: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Alexander Graham Bell"],
    answer: "Thomas Edison",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is credited with the discovery of the first antibiotic, streptomycin?",
    options: ["Alexander Fleming", "Howard Florey", "Ernst Chain", "Gerhard Domagk"],
    answer: "Selman Waksman",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who proposed the theory of continental drift?",
    options: ["Alfred Wegener", "Harry Hess", "Marie Tharp", "Tuzo Wilson"],
    answer: "Alfred Wegener",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who discovered the process of pasteurization?",
    options: ["Louis Pasteur", "Antoine Lavoisier", "Robert Koch", "Edward Jenner"],
    answer: "Louis Pasteur",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is known as the 'father of genetics'?",
    options: ["Gregor Mendel", "Thomas Hunt Morgan", "Hugo de Vries", "Friedrich Miescher"],
    answer: "Gregor Mendel",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who discovered the principles of heredity through experiments with pea plants?",
    options: ["Gregor Mendel", "Thomas Hunt Morgan", "Hugo de Vries", "Friedrich Miescher"],
    answer: "Gregor Mendel",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    options: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Jacinda Ardern"],
    answer: "Margaret Thatcher",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Which US President signed the Emancipation Proclamation?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"],
    answer: "Abraham Lincoln",
    category: "famous figures", 
    difficulty: "easy"
  },
  {
    question: "Who is the current Chancellor of Germany?",
    options: ["Angela Merkel", "Olaf Scholz", "Annalena Baerbock", "Armin Laschet"],
    answer: "Angela Merkel",
    category: "famous figures", 
    difficulty: "hard"
  },
  {
    question: "Who was the first female President of Brazil?",
    options: ["Dilma Rousseff", "Fernanda Montenegro", "Jair Bolsonaro", "Michel Temer"],
    answer: "Dilma Rousseff",
    category: "famous figures", 
    difficulty: "hard"
  },


  /////////////////HISTORY

  {
    question: "Which European explorer is credited with discovering America?",
    options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook"],
    answer: "Christopher Columbus",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did World War I begin?",
    options: ["1914", "1916", "1918", "1920"],
    answer: "1914",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "Which Egyptian pharaoh built the Great Pyramid of Giza?",
    options: ["Khufu", "Ramses II", "Hatshepsut", "Tutankhamun"],
    answer: "Khufu",
    category: "history", 
    difficulty: "hard"
  },

  {
    question: "What is the Magna Carta?",
    options: ["A famous painting", "A medieval manuscript", "A legal document", "A religious text"],
    answer: "A legal document",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "Which city was the capital of the Byzantine Empire?",
    options: ["Constantinople", "Athens", "Rome", "Alexandria"],
    answer: "Constantinople",
    category: "history", 
    difficulty: "hard"
  },
  {
    question: "What was the significance of the Battle of Waterloo?",
    options: ["End of the American Revolution", "Beginning of World War II", "Napoleon's final defeat", "Unification of Italy"],
    answer: "Napoleon's final defeat",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did the Berlin Wall fall?",
    options: ["1985", "1987", "1989", "1991"],
    answer: "1989",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "Which city hosted the 1968 Summer Olympics, remembered for the Black Power salute?",
    options: ["Mexico City", "Munich", "Montreal", "Moscow"],
    answer: "Mexico City",
    category: "history", 
    difficulty: "hard"
  },
  {
    question: "In what year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    answer: "1945",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did the French Revolution begin?",
    options: ["1776", "1789", "1792", "1804"],
    answer: "1789",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did the United States declare its independence from Great Britain?",
    options: ["1766", "1776", "1786", "1796"],
    answer: "1776",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did the Vietnam War end?",
    options: ["1968", "1973", "1980", "1989"],
    answer: "1973",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did the Russian Revolution take place?",
    options: ["1905", "1917", "1922", "1939"],
    answer: "1917",
    category: "history", 
    difficulty: "easy"
  },
  {
    question: "In what year did the Industrial Revolution begin?",
    options: ["1700", "1750", "1800", "1850"],
    answer: "1750",
    category: "history", 
    difficulty: "easy"
  },

////////////////////////////ARTS & LITERATURE

  {
    question: "Which novel features a character named Big Brother and popularized the phrase 'Big Brother is watching you'?",
    options: ["1984", "Brave New World", "Fahrenheit 451", "Animal Farm"],
    answer: "1984",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the fictional town in Harper Lee's 'To Kill a Mockingbird'?",
    options: ["Maycomb", "Starkville", "Bedford Falls", "Hill Valley"],
    answer: "Maycomb",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In which play by William Shakespeare does the character Portia appear?",
    options: ["The Merchant of Venice", "Romeo and Juliet", "Macbeth", "Hamlet"],
    answer: "The Merchant of Venice",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Jules Verne tells the story of Captain Nemo and his submarine?",
    options: ["Twenty Thousand Leagues Under the Sea", "Journey to the Center of the Earth", "Around the World in Eighty Days", "From the Earth to the Moon"],
    answer: "Twenty Thousand Leagues Under the Sea",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the fictional school of magic in J.K. Rowling's 'Harry Potter' series?",
    options: ["Hogwarts", "Ilvermorny", "Beauxbatons", "Durmstrang"],
    answer: "Hogwarts",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In George Orwell's 'Animal Farm,' which animal represents the working class?",
    options: ["The pigs", "The horses", "The dogs", "The sheep"],
    answer: "The horses",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the children's book series by C.S. Lewis featuring a magical wardrobe?",
    options: ["The Chronicles of Narnia", "Harry Potter", "Percy Jackson", "A Series of Unfortunate Events"],
    answer: "The Chronicles of Narnia",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which Shakespearean play features the famous line, 'To be, or not to be: that is the question'?",
    options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
    answer: "Hamlet",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In 'The Chronicles of Narnia' by C.S. Lewis, what type of animal is Aslan?",
    options: ["Lion", "Wolf", "Bear", "Eagle"],
    answer: "Lion",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the protagonist in Charlotte Brontë's novel 'Jane Eyre'?",
    options: ["Jane Eyre", "Elizabeth Bennet", "Emma Woodhouse", "Scarlett O'Hara"],
    answer: "Jane Eyre",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by Charles Dickens follows the life of Pip, an orphan boy?",
    options: ["Great Expectations", "Oliver Twist", "A Tale of Two Cities", "David Copperfield"],
    answer: "Great Expectations",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which science fiction novel by Ray Bradbury depicts a dystopian society where books are banned?",
    options: ["Fahrenheit 451", "Brave New World", "1984", "The Handmaid's Tale"],
    answer: "Fahrenheit 451",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the title of the play by Arthur Miller about the Salem witch trials?",
    options: ["The Crucible", "Death of a Salesman", "A Streetcar Named Desire", "Macbeth"],
    answer: "The Crucible",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by F. Scott Fitzgerald explores the decadence of the Jazz Age in America?",
    options: ["The Great Gatsby", "The Catcher in the Rye", "To Kill a Mockingbird", "Moby-Dick"],
    answer: "The Great Gatsby",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the magical sword in J.R.R. Tolkien's 'The Lord of the Rings'?",
    options: ["Andúril", "Excalibur", "Sting", "Glamdring"],
    answer: "Andúril",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In Edgar Allan Poe's poem 'The Raven,' what word does the raven keep repeating?",
    options: ["Nevermore", "Forevermore", "Evermore", "Lenore"],
    answer: "Nevermore",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Aldous Huxley depicts a future society where people are controlled by drugs and technology?",
    options: ["Brave New World", "1984", "Fahrenheit 451", "Animal Farm"],
    answer: "Brave New World",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the detective in Arthur Conan Doyle's Sherlock Holmes stories?",
    options: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Sam Spade"],
    answer: "Sherlock Holmes",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In 'Pride and Prejudice,' what is the name of Mr. Darcy's estate?",
    options: ["Pemberley", "Thornfield", "Manderley", "Barton Park"],
    answer: "Pemberley",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the family in the novel 'Little Women' by Louisa May Alcott?",
    options: ["March", "Bennet", "Lannister", "Dashwood"],
    answer: "March",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In Ernest Hemingway's 'The Old Man and the Sea,' what type of fish does the old man catch?",
    options: ["Marlin", "Salmon", "Tuna", "Trout"],
    answer: "Marlin",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by George Orwell depicts a totalitarian regime ruled by a pig named Napoleon?",
    options: ["Animal Farm", "1984", "Brave New World", "Fahrenheit 451"],
    answer: "Animal Farm",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In Mary Shelley's 'Frankenstein,' what is the name of the scientist who creates the monster?",
    options: ["Victor Frankenstein", "Henry Jekyll", "Edward Hyde", "Robert Walton"],
    answer: "Victor Frankenstein",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the ship in Herman Melville's 'Moby-Dick'?",
    options: ["Pequod", "Nautilus", "Endeavour", "Bounty"],
    answer: "Pequod",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In which play by Oscar Wilde does the character Lady Bracknell famously say, 'A handbag?'",
    options: ["The Importance of Being Earnest", "An Ideal Husband", "Lady Windermere's Fan", "Salome"],
    answer: "The Importance of Being Earnest",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the poem by Robert Frost that begins with the line, 'Two roads diverged in a yellow wood'?",
    options: ["The Road Not Taken", "Stopping by Woods on a Snowy Evening", "Fire and Ice", "Mending Wall"],
    answer: "The Road Not Taken",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by Margaret Atwood takes place in a dystopian society called Gilead?",
    options: ["The Handmaid's Tale", "Brave New World", "1984", "Fahrenheit 451"],
    answer: "The Handmaid's Tale",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In Jules Verne's 'Around the World in Eighty Days,' what is the name of the main character?",
    options: ["Phileas Fogg", "Captain Nemo", "Robinson Crusoe", "Tom Sawyer"],
    answer: "Phileas Fogg",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the novel by Joseph Heller that satirizes war and bureaucracy?",
    options: ["Catch-22", "Slaughterhouse-Five", "A Farewell to Arms", "For Whom the Bell Tolls"],
    answer: "Catch-22",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In Shakespeare's 'A Midsummer Night's Dream,' who is the king of the fairies?",
    options: ["Oberon", "Titania", "Puck", "Robin Goodfellow"],
    answer: "Oberon",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Jack Kerouac follows a group of friends as they travel across the United States?",
    options: ["On the Road", "The Great Gatsby", "The Catcher in the Rye", "To Kill a Mockingbird"],
    answer: "On the Road",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the ancient epic poem attributed to Homer that tells the story of the Trojan War?",
    options: ["The Iliad", "The Odyssey", "The Aeneid", "The Epic of Gilgamesh"],
    answer: "The Iliad",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In Gabriel García Márquez's 'One Hundred Years of Solitude,' what is the name of the fictional town?",
    options: ["Macondo", "San Lorenzo", "Santiago", "Santa Maria"],
    answer: "Macondo",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the island in William Golding's 'Lord of the Flies' where the boys are stranded?",
    options: ["Unnamed Island", "Coral Island", "Treasure Island", "Skull Island"],
    answer: "Unnamed Island",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In John Steinbeck's 'Of Mice and Men,' what is the name of the mentally disabled character?",
    options: ["Lennie Small", "George Milton", "Slim", "Curley"],
    answer: "Lennie Small",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the play by Samuel Beckett that features two characters waiting for someone who never arrives?",
    options: ["Waiting for Godot", "Rosencrantz and Guildenstern Are Dead", "No Exit", "The Bald Soprano"],
    answer: "Waiting for Godot",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Jane Austen follows the life of Emma Woodhouse and her attempts at matchmaking?",
    options: ["Emma", "Sense and Sensibility", "Pride and Prejudice", "Northanger Abbey"],
    answer: "Emma",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In the novel 'The Catcher in the Rye,' what is the name of the protagonist's younger sister?",
    options: ["Phoebe", "Holden", "Sunny", "Allie"],
    answer: "Phoebe",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the children's book series by Roald Dahl about a young boy named Charlie?",
    options: ["Charlie and the Chocolate Factory", "James and the Giant Peach", "Matilda", "The BFG"],
    answer: "Charlie and the Chocolate Factory",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In the play 'Death of a Salesman' by Arthur Miller, what is the name of the main character?",
    options: ["Willy Loman", "Biff Loman", "Happy Loman", "Linda Loman"],
    answer: "Willy Loman",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by Virginia Woolf follows a group of characters over the course of a single day?",
    options: ["Mrs. Dalloway", "To the Lighthouse", "Orlando", "A Room of One's Own"],
    answer: "Mrs. Dalloway",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the boarding school in J.D. Salinger's 'The Catcher in the Rye'?",
    options: ["Pencey Prep", "Hogwarts", "Wellington Academy", "Cranbrook School"],
    answer: "Pencey Prep",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In George Orwell's '1984,' what is the name of the government's propaganda department?",
    options: ["Ministry of Truth", "Ministry of Love", "Ministry of Peace", "Ministry of Plenty"],
    answer: "Ministry of Truth",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by Jane Austen features the character Elizabeth Bennet and her four sisters?",
    options: ["Pride and Prejudice", "Emma", "Sense and Sensibility", "Northanger Abbey"],
    answer: "Pride and Prejudice",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the theater where Romeo and Juliet first meet in Shakespeare's play?",
    options: ["The Capulet's Ballroom", "The Globe Theatre", "The Verona Theater", "The Montague's Mansion"],
    answer: "The Capulet's Ballroom",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In 'The Picture of Dorian Gray' by Oscar Wilde, what happens to the portrait of Dorian Gray?",
    options: ["It ages and shows the effects of his sins", "It remains forever youthful while Dorian himself ages", "It is destroyed and the curse is lifted", "It becomes the subject of a famous art exhibition"],
    answer: "It ages and shows the effects of his sins",
    category: "arts and literature", 
    difficulty: "hard"
  },

  {
    question: "What is the title of the play by Tennessee Williams about a woman named Blanche DuBois?",
    options: ["A Streetcar Named Desire", "Cat on a Hot Tin Roof", "The Glass Menagerie", "Sweet Bird of Youth"],
    answer: "A Streetcar Named Desire",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In George Orwell's 'Animal Farm,' what is the name of the pig who becomes the totalitarian leader?",
    options: ["Napoleon", "Snowball", "Boxer", "Squealer"],
    answer: "Napoleon",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Emily Brontë features the characters Heathcliff and Catherine Earnshaw?",
    options: ["Wuthering Heights", "Pride and Prejudice", "Jane Eyre", "Sense and Sensibility"],
    answer: "Wuthering Heights",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the street where Sherlock Holmes and Dr. Watson live in London?",
    options: ["Baker Street", "Abbey Road", "Downing Street", "Penny Lane"],
    answer: "Baker Street",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In Bram Stoker's 'Dracula,' what is the name of the ship that brings Dracula to England?",
    options: ["Demeter", "Nautilus", "Endeavour", "Bounty"],
    answer: "Demeter",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by J.R.R. Tolkien follows the journey of Frodo Baggins to destroy the One Ring?",
    options: ["The Lord of the Rings", "The Hobbit", "The Silmarillion", "The Two Towers"],
    answer: "The Lord of the Rings",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In the novel 'The Scarlet Letter' by Nathaniel Hawthorne, what is the symbol on Hester Prynne's chest?",
    options: ["The letter 'A'", "A rose", "A bird", "A heart"],
    answer: "The letter 'A'",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which play by William Shakespeare features the characters Rosencrantz and Guildenstern?",
    options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"],
    answer: "Hamlet",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the city in which Fyodor Dostoevsky's 'Crime and Punishment' takes place?",
    options: ["St. Petersburg", "Moscow", "Kiev", "London"],
    answer: "St. Petersburg",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In 'Sense and Sensibility' by Jane Austen, which sister is known for her sense, and which one for her sensibility?",
    options: ["Elinor for sense, Marianne for sensibility", "Marianne for sense, Elinor for sensibility", "Jane for sense, Elizabeth for sensibility", "Elizabeth for sense, Jane for sensibility"],
    answer: "Elinor for sense, Marianne for sensibility",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the novel by Leo Tolstoy that tells the story of Russian society during the Napoleonic era?",
    options: ["War and Peace", "Anna Karenina", "Crime and Punishment", "The Brothers Karamazov"],
    answer: "War and Peace",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In George Orwell's 'Animal Farm,' what is the name of the horse who represents the working class?",
    options: ["Boxer", "Snowball", "Napoleon", "Squealer"],
    answer: "Boxer",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Charles Dickens features the character Sydney Carton and his famous last words, 'It is a far, far better thing that I do'?",
    options: ["A Tale of Two Cities", "Great Expectations", "Oliver Twist", "David Copperfield"],
    answer: "A Tale of Two Cities",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the fictional town where Harper Lee's 'To Kill a Mockingbird' is set?",
    options: ["Maycomb", "Starkville", "Bedford Falls", "Hill Valley"],
    answer: "Maycomb",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In the novel 'Oliver Twist' by Charles Dickens, what is the name of the workhouse where Oliver is born?",
    options: ["Parish Farm", "Wardleworth's", "Willoughby Hall", "Mudge Lane"],
    answer: "Parish Farm",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the novel by Alexandre Dumas about a young man seeking revenge?",
    options: ["The Count of Monte Cristo", "Les Misérables", "The Three Musketeers", "The Hunchback of Notre-Dame"],
    answer: "The Count of Monte Cristo",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In F. Scott Fitzgerald's 'The Great Gatsby,' what is the name of the lavish mansion owned by the title character?",
    options: ["West Egg", "East Egg", "Jay Gatsby's Estate", "Daisy's House"],
    answer: "West Egg",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the mythical island in Homer's 'The Odyssey' where Odysseus encounters the Cyclops?",
    options: ["Sicily", "Crete", "Ithaca", "Sardinia"],
    answer: "Sicily",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by Ernest Hemingway tells the story of an American expatriate in Paris during the 1920s?",
    options: ["The Sun Also Rises", "For Whom the Bell Tolls", "A Farewell to Arms", "To Have and Have Not"],
    answer: "The Sun Also Rises",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In the novel 'The Adventures of Tom Sawyer' by Mark Twain, what is the name of Tom's love interest?",
    options: ["Becky Thatcher", "Huckleberry Finn", "Amy Lawrence", "Polly Harper"],
    answer: "Becky Thatcher",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the play by Tennessee Williams about a family in the Deep South?",
    options: ["The Glass Menagerie", "Cat on a Hot Tin Roof", "A Streetcar Named Desire", "Sweet Bird of Youth"],
    answer: "Cat on a Hot Tin Roof",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In William Shakespeare's 'Macbeth,' what is the name of Macbeth's wife?",
    options: ["Lady Macbeth", "Ophelia", "Desdemona", "Juliet"],
    answer: "Lady Macbeth",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by Jane Austen features the character Elinor Dashwood and her sister Marianne?",
    options: ["Sense and Sensibility", "Pride and Prejudice", "Emma", "Northanger Abbey"],
    answer: "Sense and Sensibility",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In the novel 'Alice's Adventures in Wonderland' by Lewis Carroll, what is the name of the Queen of Hearts' husband?",
    options: ["The King of Hearts", "The White Rabbit", "The Mad Hatter", "The Cheshire Cat"],
    answer: "The King of Hearts",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which play by Arthur Miller features the character Willy Loman, a traveling salesman?",
    options: ["Death of a Salesman", "The Crucible", "All My Sons", "A View from the Bridge"],
    answer: "Death of a Salesman",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the title of the play by Samuel Beckett in which the characters Vladimir and Estragon wait for someone named Godot?",
    options: ["Waiting for Godot", "Endgame", "Krapp's Last Tape", "Happy Days"],
    answer: "Waiting for Godot",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In 'The Adventures of Huckleberry Finn' by Mark Twain, what is the name of Huck's friend and runaway slave?",
    options: ["Jim", "Tom", "Joe", "Pap"],
    answer: "Jim",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the fictional city in 'A Clockwork Orange' by Anthony Burgess?",
    options: ["Ludovico", "Alexandria", "Kubrick", "Londinium"],
    answer: "Ludovico",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In William Shakespeare's 'Romeo and Juliet,' what is the name of Romeo's cousin and friend?",
    options: ["Benvolio", "Mercutio", "Tybalt", "Paris"],
    answer: "Mercutio",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the novel by Fyodor Dostoevsky about a man who commits a double murder?",
    options: ["Crime and Punishment", "The Brothers Karamazov", "Notes from Underground", "The Idiot"],
    answer: "Crime and Punishment",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In which play by Oscar Wilde does the character Lady Bracknell famously say, 'A handbag?'",
    options: ["The Importance of Being Earnest", "An Ideal Husband", "Lady Windermere's Fan", "Salome"],
    answer: "The Importance of Being Earnest",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "Which novel by George Orwell depicts a dystopian society where individuality is suppressed?",
    options: ["Nineteen Eighty-Four", "Brave New World", "Fahrenheit 451", "The Giver"],
    answer: "Nineteen Eighty-Four",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the fictional town where 'Moby-Dick' by Herman Melville is set?",
    options: ["New Bedford", "Nantucket", "Provincetown", "Salem"],
    answer: "New Bedford",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In Edgar Allan Poe's poem 'The Raven,' what does the raven perch upon?",
    options: ["A bust of Pallas", "A chamber door", "A midnight dreary", "A withered bust"],
    answer: "A bust of Pallas",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the play by William Shakespeare about a Moorish general who is driven to jealousy?",
    options: ["Othello", "Hamlet", "Macbeth", "King Lear"],
    answer: "Othello",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by Leo Tolstoy explores the moral dilemmas of Anna Karenina, a married woman in an adulterous affair?",
    options: ["Anna Karenina", "War and Peace", "Crime and Punishment", "The Brothers Karamazov"],
    answer: "Anna Karenina",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "In 'A Midsummer Night's Dream' by William Shakespeare, what is the name of the fairy king?",
    options: ["Oberon", "Titania", "Puck", "Robin Goodfellow"],
    answer: "Oberon",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the protagonist in Franz Kafka's novella 'The Metamorphosis' who wakes up as a giant insect?",
    options: ["Gregor Samsa", "Joseph K.", "K.", "Karl Roßmann"],
    answer: "Gregor Samsa",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the novel by Alexandre Dumas about a young man who joins the French Revolution?",
    options: ["The Count of Monte Cristo", "Les Misérables", "The Three Musketeers", "The Hunchback of Notre-Dame"],
    answer: "The Three Musketeers",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In George Orwell's '1984,' what is the name of the fictional language created by the government?",
    options: ["Newspeak", "Oldspeak", "Doublethink", "Thoughtcrime"],
    answer: "Newspeak",
    category: "arts and literature", 
    difficulty: "easy"
  },
  {
    question: "Which novel by J.D. Salinger follows the story of a teenager named Holden Caulfield?",
    options: ["The Catcher in the Rye", "To Kill a Mockingbird", "The Great Gatsby", "Lord of the Flies"],
    answer: "The Catcher in the Rye",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the fictional island in William Golding's 'Lord of the Flies'?",
    options: ["The Island", "Coral Island", "Skull Island", "Treasure Island"],
    answer: "The Island",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "In the novel 'To the Lighthouse' by Virginia Woolf, what is the name of the lighthouse?",
    options: ["The Godrevy Lighthouse", "The Beachy Head Lighthouse", "The Cape Hatteras Lighthouse", "The Dover Castle Lighthouse"],
    answer: "The Godrevy Lighthouse",
    category: "arts and literature", 
    difficulty: "hard"
  },
  {
    question: "What is the title of the novel by Margaret Atwood that takes place in a dystopian future where women are oppressed?",
    options: ["The Handmaid's Tale", "Brave New World", "1984", "Fahrenheit 451"],
    answer: "The Handmaid's Tale",
    category: "arts and literature", 
    difficulty: "easy"
  },

////////////////CUISINE

  
  {
    question: "What is the national dish of Italy?",
    options: ["Bolognese", "Pasta", "Risotto", "Lasagna"],
    answer: "Bolognese",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for sushi?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    answer: "Japan",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "In which country did the Caesar salad originate?",
    options: ["Greece", "Italy", "Mexico", "United States"],
    answer: "Mexico",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in hummus?",
    options: ["Chickpeas", "Lentils", "Eggplant", "Potatoes"],
    answer: "Chickpeas",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its traditional paella dish?",
    options: ["France", "Italy", "Spain", "Greece"],
    answer: "Spain",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of Mexico?",
    options: ["Tacos", "Enchiladas", "Burritos", "Mole poblano"],
    answer: "Mole poblano",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of spices such as cumin, coriander, and turmeric?",
    options: ["Indian cuisine", "Thai cuisine", "Chinese cuisine", "Mexican cuisine"],
    answer: "Indian cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Greek moussaka?",
    options: ["Eggplant", "Potatoes", "Zucchini", "Tomatoes"],
    answer: "Eggplant",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its barbecue culture?",
    options: ["United States", "Brazil", "Australia", "South Korea"],
    answer: "United States",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic French baguette?",
    options: ["Rye flour", "Whole wheat flour", "All-purpose flour", "Bread flour"],
    answer: "All-purpose flour",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its traditional kimchi dish?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    answer: "South Korea",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the primary ingredient in a classic margherita pizza?",
    options: ["Tomatoes", "Cheese", "Basil", "Garlic"],
    answer: "Tomatoes",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is famous for its use of coconut milk and spices like lemongrass and galangal?",
    options: ["Thai cuisine", "Indian cuisine", "Indonesian cuisine", "Vietnamese cuisine"],
    answer: "Thai cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional British fish and chips dish?",
    options: ["Cod", "Salmon", "Haddock", "Tuna"],
    answer: "Cod",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is known for its traditional falafel dish?",
    options: ["Lebanon", "Egypt", "Israel", "Turkey"],
    answer: "Egypt",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its emphasis on fresh seafood and sushi?",
    options: ["Mediterranean cuisine", "Japanese cuisine", "Mexican cuisine", "Thai cuisine"],
    answer: "Japanese cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic American hamburger?",
    options: ["Beef patty", "Chicken patty", "Veggie patty", "Pork patty"],
    answer: "Beef patty",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional moules-frites dish?",
    options: ["Belgium", "France", "Germany", "Netherlands"],
    answer: "Belgium",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Spanish sangria?",
    options: ["Red wine", "White wine", "Orange juice", "Gin"],
    answer: "Red wine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of pickled vegetables, rice vinegar, and soy sauce?",
    options: ["Chinese cuisine", "Japanese cuisine", "Korean cuisine", "Thai cuisine"],
    answer: "Japanese cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Thai green curry?",
    options: ["Green chili peppers", "Lemongrass", "Coconut milk", "Galangal"],
    answer: "Coconut milk",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of Brazil?",
    options: ["Feijoada", "Picanha", "Coxinha", "Brigadeiro"],
    answer: "Feijoada",
    category: "cuisine", 
    difficulty: "hard"
  },
  {
    question: "Which cuisine is known for its use of spices such as cinnamon, cloves, and saffron?",
    options: ["Indian cuisine", "Italian cuisine", "Spanish cuisine", "Moroccan cuisine"],
    answer: "Moroccan cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Mexican guacamole?",
    options: ["Avocado", "Tomato", "Onion", "Lime"],
    answer: "Avocado",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional butter chicken dish?",
    options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
    answer: "India",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Japanese miso soup?",
    options: ["Miso paste", "Tofu", "Seaweed", "Green onions"],
    answer: "Miso paste",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like lime, cilantro, and chili peppers?",
    options: ["Mexican cuisine", "Thai cuisine", "Vietnamese cuisine", "Peruvian cuisine"],
    answer: "Mexican cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Italian risotto?",
    options: ["Rice", "Pasta", "Potatoes", "Barley"],
    answer: "Rice",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional pad Thai dish?",
    options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
    answer: "Thailand",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of Argentina?",
    options: ["Empanadas", "Asado", "Milanesa", "Dulce de leche"],
    answer: "Asado",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of garlic, olive oil, and tomatoes?",
    options: ["Italian cuisine", "Greek cuisine", "Spanish cuisine", "French cuisine"],
    answer: "Italian cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Vietnamese pho soup?",
    options: ["Rice noodles", "Egg noodles", "Wheat noodles", "Bean thread noodles"],
    answer: "Rice noodles",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional goulash dish?",
    options: ["Germany", "Hungary", "Poland", "Czech Republic"],
    answer: "Hungary",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Indian curry?",
    options: ["Curry powder", "Garam masala", "Turmeric", "Cumin"],
    answer: "Turmeric",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like tamarind, turmeric, and cardamom?",
    options: ["Indian cuisine", "Thai cuisine", "Malaysian cuisine", "Indonesian cuisine"],
    answer: "Indian cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Moroccan couscous?",
    options: ["Couscous", "Bulgur", "Quinoa", "Barley"],
    answer: "Couscous",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional borscht soup?",
    options: ["Russia", "Ukraine", "Poland", "Belarus"],
    answer: "Russia",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of China?",
    options: ["Sweet and sour pork", "Peking duck", "Kung Pao chicken", "Dumplings"],
    answer: "Peking duck",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like soy sauce, ginger, and garlic?",
    options: ["Chinese cuisine", "Japanese cuisine", "Korean cuisine", "Thai cuisine"],
    answer: "Chinese cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Spanish gazpacho soup?",
    options: ["Tomatoes", "Cucumbers", "Red bell peppers", "Onions"],
    answer: "Tomatoes",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional pierogi dish?",
    options: ["Russia", "Poland", "Ukraine", "Lithuania"],
    answer: "Poland",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Ethiopian injera bread?",
    options: ["Wheat flour", "Rye flour", "Barley flour", "Teff flour"],
    answer: "Teff flour",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like sumac, pomegranate, and mint?",
    options: ["Lebanese cuisine", "Iranian cuisine", "Turkish cuisine", "Israeli cuisine"],
    answer: "Lebanese cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Lebanese tabbouleh salad?",
    options: ["Bulgur", "Quinoa", "Couscous", "Barley"],
    answer: "Bulgur",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional beef Wellington dish?",
    options: ["England", "Scotland", "Ireland", "Wales"],
    answer: "England",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like coconut milk, lime leaves, and chili paste?",
    options: ["Thai cuisine", "Vietnamese cuisine", "Indonesian cuisine", "Malaysian cuisine"],
    answer: "Thai cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic American apple pie?",
    options: ["Apples", "Peaches", "Cherries", "Blueberries"],
    answer: "Apples",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional French escargot dish?",
    options: ["Escargot", "Butter", "Garlic", "Parsley"],
    answer: "Escargot",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like paprika, caraway seeds, and sauerkraut?",
    options: ["French cuisine", "Italian cuisine", "German cuisine", "Greek cuisine"],
    answer: "German cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Korean bibimbap dish?",
    options: ["Beef", "Rice", "Kimchi", "Egg"],
    answer: "Rice",
    category: "cuisine", 
    difficulty: "hard"
  },
  {
    question: "Which country is famous for its traditional haggis dish?",
    options: ["Scotland", "Ireland", "England", "Wales"],
    answer: "Scotland",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of Spain?",
    options: ["Tapas", "Paella", "Gazpacho", "Churros"],
    answer: "Paella",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Mexican ceviche dish?",
    options: ["Shrimp", "Lime juice", "Tomatoes", "Onions"],
    answer: "Lime juice",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional poutine dish?",
    options: ["Canada", "United States", "France", "Belgium"],
    answer: "Canada",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Italian tiramisu dessert?",
    options: ["Coffee", "Mascarpone cheese", "Ladyfingers", "Cocoa powder"],
    answer: "Coffee",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional German sauerkraut dish?",
    options: ["Cabbage", "Potatoes", "Sausage", "Mustard"],
    answer: "Cabbage",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional coq au vin dish?",
    options: ["France", "Italy", "Spain", "Greece"],
    answer: "France",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of Vietnam?",
    options: ["Pho", "Banh mi", "Goi cuon", "Bun cha"],
    answer: "Pho",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like lemongrass, fish sauce, and chili peppers?",
    options: ["Vietnamese cuisine", "Thai cuisine", "Indonesian cuisine", "Malaysian cuisine"],
    answer: "Vietnamese cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Greek tzatziki sauce?",
    options: ["Yogurt", "Cucumber", "Garlic", "Dill"],
    answer: "Yogurt",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional jambalaya dish?",
    options: ["United States", "Mexico", "Spain", "Brazil"],
    answer: "United States",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Mexican mole sauce?",
    options: ["Chocolate", "Chilies", "Tomatoes", "Onions"],
    answer: "Chocolate",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like lime, avocado, and cilantro?",
    options: ["Mexican cuisine", "Peruvian cuisine", "Cuban cuisine", "Puerto Rican cuisine"],
    answer: "Mexican cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Japanese tempura dish?",
    options: ["Seafood", "Vegetables", "Batter", "Soy sauce"],
    answer: "Batter",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional beef stroganoff dish?",
    options: ["Russia", "France", "Italy", "Germany"],
    answer: "Russia",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of France?",
    options: ["Pot-au-feu", "Ratatouille", "Escargot", "Croissant"],
    answer: "Pot-au-feu",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like thyme, rosemary, and lavender?",
    options: ["French cuisine", "Italian cuisine", "Greek cuisine", "Spanish cuisine"],
    answer: "French cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Indian samosa dish?",
    options: ["Potatoes", "Chicken", "Lentils", "Paneer"],
    answer: "Potatoes",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional tandoori chicken dish?",
    options: ["India", "Pakistan", "Bangladesh", "Afghanistan"],
    answer: "India",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Thai tom yum soup?",
    options: ["Lemongrass", "Galangal", "Chili peppers", "Fish sauce"],
    answer: "Lemongrass",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Jamaican jerk chicken dish?",
    options: ["Scotch bonnet peppers", "Thyme", "Allspice", "Brown sugar"],
    answer: "Scotch bonnet peppers",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional Wiener Schnitzel dish?",
    options: ["Germany", "Austria", "Switzerland", "Hungary"],
    answer: "Austria",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the national dish of Greece?",
    options: ["Moussaka", "Gyros", "Spanakopita", "Souvlaki"],
    answer: "Moussaka",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like oregano, feta cheese, and olives?",
    options: ["Greek cuisine", "Italian cuisine", "Turkish cuisine", "Spanish cuisine"],
    answer: "Greek cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Chinese dumpling?",
    options: ["Pork", "Chicken", "Beef", "Shrimp"],
    answer: "Pork",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional bibingka dish?",
    options: ["China", "Japan", "Philippines", "Indonesia"],
    answer: "Philippines",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like saffron, cardamom, and rose water?",
    options: ["Indian cuisine", "Persian cuisine", "Turkish cuisine", "Moroccan cuisine"],
    answer: "Persian cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Turkish baklava dessert?",
    options: ["Phyllo dough", "Walnuts", "Honey", "Cinnamon"],
    answer: "Phyllo dough",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional piri piri chicken dish?",
    options: ["Brazil", "Mexico", "Portugal", "Angola"],
    answer: "Portugal",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a classic Mexican enchilada dish?",
    options: ["Tortillas", "Chicken", "Beans", "Cheese"],
    answer: "Tortillas",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional falafel wrap?",
    options: ["Egypt", "Israel", "Lebanon", "Syria"],
    answer: "Egypt",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Italian pesto sauce?",
    options: ["Basil", "Pine nuts", "Garlic", "Parmesan cheese"],
    answer: "Basil",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which cuisine is known for its use of flavors like basil, pine nuts, and parmesan cheese?",
    options: ["Italian cuisine", "French cuisine", "Spanish cuisine", "Greek cuisine"],
    answer: "Italian cuisine",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Ethiopian doro wat dish?",
    options: ["Chicken", "Beef", "Lentils", "Chickpeas"],
    answer: "Chicken",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional cassoulet dish?",
    options: ["France", "Italy", "Spain", "Portugal"],
    answer: "France",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the main ingredient in a traditional Brazilian feijoada dish?",
    options: ["Black beans", "Rice", "Pork", "Collard greens"],
    answer: "Black beans",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "Which country is famous for its traditional pavlova dessert?",
    options: ["Australia", "New Zealand", "Fiji", "Samoa"],
    answer: "New Zealand",
    category: "cuisine", 
    difficulty: "easy"
  },
  {
    question: "What is the key ingredient in a traditional Mexican pozole soup?",
    options: ["Hominy", "Chicken", "Pork", "Chilies"],
    answer: "Hominy",
    category: "cuisine", 
    difficulty: "easy"
  },

  ////////////////////MYHTOLOGY

  {
    question: "In Greek mythology, which god is the king of the underworld?",
    options: ["Zeus", "Hades", "Poseidon", "Apollo"],
    answer: "Hades",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the legendary creature that is half-lion and half-eagle?",
    options: ["Sphinx", "Chimera", "Centaur", "Griffin"],
    answer: "Griffin",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which famous Norse god wields the hammer Mjolnir?",
    options: ["Odin", "Loki", "Thor", "Freyr"],
    answer: "Thor",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Irish folklore, what mythical creature is said to grant wishes?",
    options: ["Leprechaun", "Banshee", "Selkie", "Dullahan"],
    answer: "Leprechaun",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Chinese mythology, which animal is associated with wisdom and longevity?",
    options: ["Dragon", "Phoenix", "Tiger", "Tortoise"],
    answer: "Tortoise",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "What mythical creature is said to be a part of Scottish folklore and live in the water?",
    options: ["Selkie", "Kelpie", "Nessie", "Brownie"],
    answer: "Kelpie",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which legendary hero is known for his archery skills and is associated with Greek mythology?",
    options: ["Perseus", "Heracles", "Achilles", "Odysseus"],
    answer: "Odysseus",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Native American folklore, what creature is said to have the ability to transform into a wolf?",
    options: ["Wendigo", "Skinwalker", "Sasquatch", "Chupacabra"],
    answer: "Skinwalker",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which mythical bird is said to rise from its own ashes?",
    options: ["Harpy", "Siren", "Phoenix", "Griffon"],
    answer: "Phoenix",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Hindu mythology, who is the god of destruction?",
    options: ["Vishnu", "Brahma", "Shiva", "Indra"],
    answer: "Shiva",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which ancient civilization believed in the existence of the minotaur?",
    options: ["Egyptians", "Romans", "Greeks", "Persians"],
    answer: "Greeks",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "According to Egyptian mythology, who is the god of the sun?",
    options: ["Ra", "Anubis", "Horus", "Osiris"],
    answer: "Ra",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Japanese folklore, what type of creature is a kitsune?",
    options: ["Dragon", "Fox", "Oni", "Tanuki"],
    answer: "Fox",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Russian folklore is said to be a hybrid of a bird and a woman?",
    options: ["Vodyanoy", "Rusalka", "Baba Yaga", "Sirin"],
    answer: "Sirin",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Norse mythology, what animal pulls the chariot of the moon?",
    options: ["Wolf", "Horse", "Goat", "Stag"],
    answer: "Goat",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which legendary creature is associated with the Loch Ness in Scotland?",
    options: ["Kelpie", "Selkie", "Nessie", "Sjörå"],
    answer: "Nessie",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Hindu mythology, who is the monkey god known for his strength and devotion?",
    options: ["Hanuman", "Ganesha", "Rama", "Krishna"],
    answer: "Hanuman",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which famous figure from Arthurian legends is known as the Lady of the Lake?",
    options: ["Morgana", "Guinevere", "Nimue", "Morgan le Fay"],
    answer: "Nimue",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Greek mythology, who is the goddess of love and beauty?",
    options: ["Athena", "Hera", "Aphrodite", "Artemis"],
    answer: "Aphrodite",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "What creature from Persian mythology is often depicted as a large, winged lion?",
    options: ["Simurgh", "Anzu", "Manticore", "Griffin"],
    answer: "Simurgh",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Norse mythology, what creature guards the gates of Asgard?",
    options: ["Fenrir", "Jormungandr", "Heimdall", "Sleipnir"],
    answer: "Heimdall",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which Greek hero is known for slaying the Gorgon Medusa?",
    options: ["Perseus", "Theseus", "Heracles", "Jason"],
    answer: "Perseus",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Native American folklore, what creature possesses the power of healing and foresight?",
    options: ["Coyote", "Raven", "Owl", "Wolf"],
    answer: "Owl",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which legendary figure is said to have pulled a sword from a stone, becoming the rightful king of England?",
    options: ["Merlin", "Arthur", "Lancelot", "Gawain"],
    answer: "Arthur",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Egyptian mythology, what creature is part lion and part human?",
    options: ["Anubis", "Sobek", "Horus", "Sphinx"],
    answer: "Sphinx",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the legendary sword associated with King Arthur?",
    options: ["Caliburn", "Excalibur", "Avalon", "Clarent"],
    answer: "Excalibur",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Japanese folklore, what type of creature is a kappa?",
    options: ["Goblin", "Water spirit", "Demon", "Tengu"],
    answer: "Water spirit",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Scottish folklore is said to be a water-dwelling horse?",
    options: ["Kelpie", "Selkie", "Nuckelavee", "Bean Nighe"],
    answer: "Kelpie",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Greek mythology, what is the name of the three-headed dog guarding the gates of the underworld?",
    options: ["Cerberus", "Orthrus", "Chimera", "Typhon"],
    answer: "Cerberus",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Native American folklore, what creature is believed to be a protector of nature and the forest?",
    options: ["Thunderbird", "Cherokee", "Kokopelli", "Manitou"],
    answer: "Thunderbird",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which creature from Norse mythology has the ability to shape-shift into different animals?",
    options: ["Loki", "Fenrir", "Sleipnir", "Jormungandr"],
    answer: "Loki",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Hindu mythology, what is the name of the god known as the preserver of the universe?",
    options: ["Vishnu", "Shiva", "Brahma", "Indra"],
    answer: "Vishnu",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Japanese folklore, what creature is a half-human and half-fish?",
    options: ["Nekomata", "Kappa", "Yokai", "Ningyo"],
    answer: "Ningyo",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which legendary creature from Irish folklore is said to be mischievous and often depicted as a small, bearded man?",
    options: ["Leprechaun", "Banshee", "Pooka", "Sidhe"],
    answer: "Leprechaun",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Norse mythology, what is the name of the tree that connects the nine realms?",
    options: ["Yggdrasil", "Freyr", "Bifröst", "Jotunheim"],
    answer: "Yggdrasil",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Greek mythology, who is the god of wine and celebration?",
    options: ["Dionysus", "Apollo", "Hermes", "Pan"],
    answer: "Dionysus",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which creature from Persian mythology is depicted as a giant bird with a wingspan capable of blocking out the sun?",
    options: ["Simurgh", "Manticore", "Sphynx", "Anzu"],
    answer: "Simurgh",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Native American folklore, what creature is associated with trickery and transformation?",
    options: ["Wendigo", "Skinwalker", "Chupacabra", "Coyote"],
    answer: "Coyote",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which legendary figure from Arthurian legends is known for his role as King Arthur's mentor?",
    options: ["Merlin", "Gawain", "Lancelot", "Mordred"],
    answer: "Merlin",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Greek mythology, what creature is said to be a hybrid of a lion and a goat?",
    options: ["Centaur", "Cyclops", "Minotaur", "Siren"],
    answer: "Minotaur",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the legendary sword associated with the British king, Excalibur's sister?",
    options: ["Excalibur", "Clarent", "Caliburn", "Avalon"],
    answer: "Clarent",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Norse mythology, who is the god of thunder?",
    options: ["Baldr", "Freyr", "Thor", "Odin"],
    answer: "Thor",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Chinese mythology, what creature is said to control the waters and bring rainfall?",
    options: ["Dragon", "Phoenix", "Qilin", "Leviathan"],
    answer: "Dragon",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which mythical creature from Irish folklore is believed to be a solitary fairy, usually depicted as an old man with a pipe?",
    options: ["Banshee", "Leprechaun", "Pooka", "Sidhe"],
    answer: "Pooka",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Hindu mythology, what is the name of the goddess of wealth and prosperity?",
    options: ["Lakshmi", "Durga", "Parvati", "Kali"],
    answer: "Lakshmi",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Greek mythology, what is the name of the winged horse born from the blood of Medusa?",
    options: ["Pegasus", "Hippogriff", "Chimera", "Centauros"],
    answer: "Pegasus",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which creature from Scottish folklore is said to be a small, mischievous household spirit?",
    options: ["Brownie", "Kelpie", "Selkie", "Nuckelavee"],
    answer: "Brownie",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Native American folklore, what creature is associated with the spirit world and is considered a messenger?",
    options: ["Raven", "Coyote", "Eagle", "Owl"],
    answer: "Raven",
    category: "mythology", 
    difficulty: "easy"
  },
  
  {
    question: "What legendary creature from medieval bestiaries is said to be a serpent with the head of a lion and the wings of a bird?",
    options: ["Griffin", "Basilisk", "Chimera", "Siren"],
    answer: "Basilisk",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Norse mythology, what creature is said to cause ships to sink and drown sailors?",
    options: ["Kraken", "Mermaid", "Siren", "Nymph"],
    answer: "Siren",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "According to Greek mythology, who is the goddess of wisdom and warfare strategy?",
    options: ["Athena", "Hera", "Aphrodite", "Artemis"],
    answer: "Athena",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Chinese mythology is associated with good luck and is often depicted with a horn on its forehead?",
    options: ["Dragon", "Phoenix", "Unicorn", "Kirin"],
    answer: "Kirin",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Irish folklore, what mythical creature is said to bring bad luck and is often depicted as a female spirit?",
    options: ["Banshee", "Selkie", "Dullahan", "Pooka"],
    answer: "Banshee",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the legendary sword associated with the Celtic hero, Cú Chulainn?",
    options: ["Excalibur", "Durandal", "Caladbolg", "Gram"],
    answer: "Caladbolg",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Hindu mythology, who is the god of knowledge, music, and arts?",
    options: ["Brahma", "Shiva", "Vishnu", "Saraswati"],
    answer: "Saraswati",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Japanese folklore, what type of creature is a tanuki?",
    options: ["Goblin", "Fox", "Yokai", "Raccoon Dog"],
    answer: "Raccoon Dog",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which legendary creature from Scandinavian folklore is said to be a female spirit associated with waterways and waterfalls?",
    options: ["Nymph", "Valkyrie", "Siren", "Huldra"],
    answer: "Huldra",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Greek mythology, what creature is said to be a hybrid of a lion, goat, and serpent?",
    options: ["Chimera", "Centaur", "Minotaur", "Harpy"],
    answer: "Chimera",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "What is the name of the legendary sword associated with the knight Roland in French folklore?",
    options: ["Joyeuse", "Durendal", "Hauteclere", "Excalibur"],
    answer: "Durendal",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Egyptian mythology, who is the goddess of magic and healing?",
    options: ["Isis", "Bastet", "Sekhmet", "Hathor"],
    answer: "Isis",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Norse mythology, what creature is said to fly through the sky and deliver messages to the gods?",
    options: ["Valkyrie", "Fenrir", "Sleipnir", "Gullinkambi"],
    answer: "Gullinkambi",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Japanese folklore is a shape-shifting raccoon dog?",
    options: ["Kitsune", "Tengu", "Kappa", "Tanuki"],
    answer: "Tanuki",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Irish folklore, what creature is said to guard a pot of gold at the end of a rainbow?",
    options: ["Leprechaun", "Banshee", "Sidhe", "Pooka"],
    answer: "Leprechaun",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Hindu mythology, what is the name of the god known as the destroyer of evil?",
    options: ["Vishnu", "Shiva", "Brahma", "Indra"],
    answer: "Shiva",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which mythical creature from Scottish folklore is said to be a small, solitary household spirit?",
    options: ["Brownie", "Selkie", "Kelpie", "Nuckelavee"],
    answer: "Brownie",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Greek mythology, who is the god of the sea?",
    options: ["Hades", "Poseidon", "Zeus", "Apollo"],
    answer: "Poseidon",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the legendary sword associated with the knight Lancelot in Arthurian legends?",
    options: ["Excalibur", "Caliburn", "Clarent", "Joyeuse"],
    answer: "Clarent",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Norse mythology, who is the queen of the gods and wife of Odin?",
    options: ["Frigg", "Freya", "Sif", "Hel"],
    answer: "Frigg",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Irish folklore is believed to be a malevolent spirit, often depicted as a horse with burning eyes?",
    options: ["Kelpie", "Selkie", "Dullahan", "Banshee"],
    answer: "Dullahan",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Hindu mythology, what is the name of the goddess of love and fertility?",
    options: ["Saraswati", "Durga", "Parvati", "Lakshmi"],
    answer: "Parvati",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "What legendary creature from Arabian folklore is said to be a half-lion and half-eagle?",
    options: ["Griffin", "Basilisk", "Manticore", "Roc"],
    answer: "Manticore",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Native American folklore, what creature is believed to be a spirit guide and protector of tribes?",
    options: ["Thunderbird", "Coyote", "Wolf", "Raven"],
    answer: "Wolf",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "Which mythical creature from Persian mythology is said to be a giant, fire-breathing bird?",
    options: ["Simurgh", "Griffon", "Phoenix", "Harpy"],
    answer: "Simurgh",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Japanese folklore, what type of creature is a tengu?",
    options: ["Goblin", "Dragon", "Yokai", "Demon"],
    answer: "Goblin",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "What creature from Scottish folklore is said to be a large, terrifying sea monster?",
    options: ["Selkie", "Nuckelavee", "Kelpie", "Brownie"],
    answer: "Nuckelavee",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Greek mythology, who is the goddess of the hunt and the moon?",
    options: ["Artemis", "Aphrodite", "Hera", "Demeter"],
    answer: "Artemis",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Norse mythology, what creature is said to be a giant serpent encircling the world?",
    options: ["Fenrir", "Nidhogg", "Jormungandr", "Wyrm"],
    answer: "Jormungandr",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which legendary figure from Arthurian legends is known for his role as King Arthur's greatest knight?",
    options: ["Gawain", "Lancelot", "Percival", "Galahad"],
    answer: "Lancelot",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "According to Egyptian mythology, who is the god of the dead and the afterlife?",
    options: ["Anubis", "Osiris", "Ra", "Set"],
    answer: "Osiris",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Irish folklore, what mythical creature is said to be a nocturnal water horse?",
    options: ["Selkie", "Kelpie", "Banshee", "Pooka"],
    answer: "Kelpie",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Hindu mythology, who is the god of fire?",
    options: ["Indra", "Surya", "Agni", "Varuna"],
    answer: "Agni",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Japanese folklore, what type of creature is a yuki-onna?",
    options: ["Snow Woman", "Ghost", "Yokai", "Demon"],
    answer: "Snow Woman",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Norse mythology is said to be a squirrel that runs up and down the world tree?",
    options: ["Ratatoskr", "Fenrir", "Ratatosk", "Sleipnir"],
    answer: "Ratatoskr",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Greek mythology, what creature is said to be a hybrid of a lion and an eagle?",
    options: ["Basilisk", "Hippogriff", "Manticore", "Griffin"],
    answer: "Hippogriff",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "What legendary creature from Celtic folklore is said to be a water horse that lures people to their doom?",
    options: ["Nuckelavee", "Selkie", "Kelpie", "Bunyip"],
    answer: "Kelpie",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Norse mythology, who is the god of mischief and trickery?",
    options: ["Freyr", "Loki", "Baldr", "Thor"],
    answer: "Loki",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "In Chinese mythology, what creature is said to guard the heavenly gates and prevent evil spirits from entering?",
    options: ["Lion", "Dragon", "Phoenix", "Qilin"],
    answer: "Lion",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which creature from Russian folklore is believed to be a mischievous house spirit?",
    options: ["Leshy", "Domovoi", "Baba Yaga", "Vodyanoy"],
    answer: "Domovoi",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "According to Irish folklore, what mythical creature is said to be a small, solitary fairy often depicted as an old woman?",
    options: ["Sidhe", "Leprechaun", "Banshee", "Bean Sidhe"],
    answer: "Bean Sidhe",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Hindu mythology, what is the name of the god known as the supreme being and creator of the universe?",
    options: ["Shiva", "Vishnu", "Brahma", "Krishna"],
    answer: "Brahma",
    category: "mythology", 
    difficulty: "easy"
  },
  {
    question: "According to Greek mythology, who is the goddess of the harvest and fertility?",
    options: ["Aphrodite", "Demeter", "Hera", "Persephone"],
    answer: "Demeter",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "In Egyptian mythology, what creature is depicted as a large, mythical snake?",
    options: ["Sphinx", "Ammit", "Sobek", "Apep"],
    answer: "Apep",
    category: "mythology", 
    difficulty: "hard"
  },
  {
    question: "Which legendary creature from Japanese folklore is said to be a giant cat with supernatural powers?",
    options: ["Kitsune", "Nekomata", "Bakeneko", "Maneki-neko"],
    answer: "Bakeneko",
    category: "mythology", 
    difficulty: "hard"
  },

  /////////////////EASY MIXED

  {
    question: "What is the name of the first man who walked on the moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "John Glenn"],
    answer: "Neil Armstrong",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which mountain is the highest in the world?",
    options: ["K2", "Mount Everest", "Makalu", "Cho Oyu"],
    answer: "Mount Everest",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    answer: "Vatican City",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the first person to swim across the English Channel?",
    options: ["Captain Matthew Webb", "Gertrude Ederle", "Abbe Faria", "John William Dalling"],
    answer: "Captain Matthew Webb",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Jupiter", "Mars", "Mercury"],
    answer: "Mars",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who is known as the 'King of Rock and Roll'?",
    options: ["Elvis Presley", "The Beatles", "Buddy Holly", "Chuck Berry"],
    answer: "Elvis Presley",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the largest waterfall system in the world?",
    options: ["Niagara Falls", "Angel Falls", "Iguazu Falls", "Victoria Falls"],
    answer: "Victoria Falls",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest living reptile?",
    options: ["Saltwater Crocodile", "American Alligator", "Nile Crocodile", "Gharial"],
    answer: "Saltwater Crocodile",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's tallest mammal?",
    options: ["Giraffe", "Elephant", "Hippopotamus", "Rhinoceros"],
    answer: "Giraffe",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest fish?",
    options: ["Whale Shark", "Great White Shark", "Tiger Shark", "Bull Shark"],
    answer: "Whale Shark",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the smallest country in Africa?",
    options: ["Seychelles", "Gambia", "Cape Verde", "Mauritius"],
    answer: "Seychelles",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who was the first female astronaut to fly into space?",
    options: ["Valentina Tereshkova", "Sally Ride", "Judith Resnik", "Mae Jemison"],
    answer: "Valentina Tereshkova",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest land mammal?",
    options: ["African Elephant", "Polar Bear", "Grizzly Bear", "Siberian Tiger"],
    answer: "African Elephant",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest bird?",
    options: ["Ostrich", "Emu", "Albatross", "Penguin"],
    answer: "Ostrich",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who was the first person to reach the South Pole?",
    options: ["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "Richard E. Byrd"],
    answer: "Roald Amundsen",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest lizard?",
    options: ["Komodo Dragon", "Gila Monster", "Bearded Dragon", "Iguana"],
    answer: "Komodo Dragon",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's highest waterfall?",
    options: ["Angel Falls", "Niagara Falls", "Iguazu Falls", "Victoria Falls"],
    answer: "Angel Falls",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who is the only person to have won Nobel Prizes in two different scientific fields?",
    options: ["Marie Curie", "Albert Einstein", "Niels Bohr", "Linus Pauling"],
    answer: "Marie Curie",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who was the first female author to win the Nobel Prize in Literature?",
    options: ["Selma Lagerlöf", "Virginia Woolf", "Toni Morrison", "Doris Lessing"],
    answer: "Selma Lagerlöf",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest coral reef system?",
    options: ["Great Barrier Reef", "Belize Barrier Reef", "Red Sea Coral Reef", "Andros Barrier Reef"],
    answer: "Great Barrier Reef",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who was the first person to fly solo across the Atlantic Ocean?",
    options: ["Charles Lindbergh", "Amelia Earhart", "Howard Hughes", "Wiley Post"],
    answer: "Charles Lindbergh",
    category: "mixed", 
    difficulty: "easy"
  },
  { question: "What is the largest planet in our solar system?",    
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: "Jupiter",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which element is represented by the chemical symbol 'Fe'?",
    options: ["Iron", "Gold", "Silver", "Copper"],
    answer: "Iron",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who was the first U.S. president to be impeached?",
    options: ["Richard Nixon", "Bill Clinton", "Andrew Johnson", "Donald Trump"],
    answer: "Andrew Johnson",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    answer: "Mercury",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the largest ocean on Earth?",
    options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which country gifted the Statue of Liberty to the United States?",
    options: ["France", "England", "Spain", "Italy"],
    answer: "France",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest river by volume?",
    options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    answer: "Amazon River",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest continent?",
    options: ["North America", "Europe", "Asia", "South America"],
    answer: "Asia",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest archipelago?",
    options: ["Maldives", "Bahamas", "Hawaii", "Indonesia"],
    answer: "Indonesia",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's deepest ocean trench?",
    options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Aleutian Trench"],
    answer: "Mariana Trench",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest species of shark?",
    options: ["Whale Shark", "Great White Shark", "Tiger Shark", "Basking Shark"],
    answer: "Whale Shark",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Who composed the famous piece 'Fur Elise'?",
    options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Johannes Brahms"],
    answer: "Ludwig van Beethoven",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the deepest lake in the world?",
    options: ["Lake Superior", "Lake Baikal", "Lake Victoria", "Crater Lake"],
    answer: "Lake Baikal",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which country has the longest coastline in the world?",
    options: ["Canada", "Russia", "Australia", "United States"],
    answer: "Canada",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest snake?",
    options: ["Green Anaconda", "King Cobra", "Black Mamba", "Reticulated Python"],
    answer: "Green Anaconda",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the currency used in Japan?",
    options: ["Euro", "Yuan", "Dollar", "Yen"],
    answer: "Yen",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which planet in our Solar System has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "What is the name of the world's largest stadium by seating capacity?",
    options: ["Wembley Stadium", "AT&T Stadium", "Rungrado 1st of May Stadium", "Rose Bowl Stadium"],
    answer: "Rungrado 1st of May Stadium",
    category: "mixed", 
    difficulty: "easy"
  },
  {
    question: "Which city is considered the fashion capital of the world?",
    options: ["Paris", "Milan", "London", "New York"],
    answer: "Paris",
    category: "mixed", 
    difficulty: "easy"
  },

  ////////////POP CULTURE

  {
    question: 'Which actor played James Bond in the film "Goldfinger"?',
    options: ['Sean Connery', 'Roger Moore', 'Pierce Brosnan', 'Daniel Craig'],
    answer: 'Sean Connery',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What year did The Beatles release their album "Sgt. Pepper\'s Lonely Hearts Club Band"?',
    options: ['1967', '1965', '1970', '1969'],
    answer: '1967',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who played the character Tony Stark in the "Iron Man" film series?',
    options: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'],
    answer: 'Robert Downey Jr.',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'In which decade did the TV show "I Love Lucy" first air?',
    options: ['1950s', '1960s', '1940s', '1930s'],
    answer: '1950s',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What was the name of the fictional town where "The Andy Griffith Show" took place?',
    options: ['Mayberry', 'Springfield', 'Sunnydale', 'Stars Hollow'],
    answer: 'Mayberry',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "Gone with the Wind"?',
    options: ['Vivien Leigh', 'Audrey Hepburn', 'Grace Kelly', 'Ingrid Bergman'],
    answer: 'Vivien Leigh',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the highest-grossing film of all time?',
    options: ['Avengers: Endgame', 'Avatar', 'Titanic', 'Star Wars: The Force Awakens'],
    answer: 'Avengers: Endgame',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What was the name of the fictional detective created by Agatha Christie?',
    options: ['Hercule Poirot', 'Sherlock Holmes', 'Miss Marple', 'Sam Spade'],
    answer: 'Hercule Poirot',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actress played the iconic character Carrie Bradshaw in the TV show "Sex and the City"?',
    options: ['Sarah Jessica Parker', 'Jennifer Aniston', 'Julia Roberts', 'Cameron Diaz'],
    answer: 'Sarah Jessica Parker',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor played the character Michael Corleone in "The Godfather" film series?',
    options: ['Al Pacino', 'Marlon Brando', 'Robert De Niro', 'James Caan'],
    answer: 'Al Pacino',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is known as the "King of Pop"?',
    options: ['Michael Jackson', 'Elvis Presley', 'Prince', 'Stevie Wonder'],
    answer: 'Michael Jackson',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of Batman\'s butler?',
    options: ['Alfred Pennyworth', 'Harvey Dent', 'Lucius Fox', 'Jonathan Crane'],
    answer: 'Alfred Pennyworth',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who directed the film "Schindler\'s List"?',
    options: ['Steven Spielberg', 'Martin Scorsese', 'Quentin Tarantino', 'Christopher Nolan'],
    answer: 'Steven Spielberg',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "The Godfather"?',
    options: ['Marlon Brando', 'Al Pacino', 'Robert De Niro', 'James Caan'],
    answer: 'Marlon Brando',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actress starred as Holly Golightly in the film "Breakfast at Tiffany\'s"?',
    options: ['Audrey Hepburn', 'Marilyn Monroe', 'Grace Kelly', 'Elizabeth Taylor'],
    answer: 'Audrey Hepburn',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who played the character Hannibal Lecter in the film "The Silence of the Lambs"?',
    options: ['Anthony Hopkins', 'Mads Mikkelsen', 'Brian Cox', 'Gaspard Ulliel'],
    answer: 'Anthony Hopkins',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What was the first feature-length animated film ever released?',
    options: ['Snow White and the Seven Dwarfs', 'Fantasia', 'Pinocchio', 'Bambi'],
    answer: 'Snow White and the Seven Dwarfs',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band U2?',
    options: ['Bono', 'Mick Jagger', 'Freddie Mercury', 'Chris Martin'],
    answer: 'Bono',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the highest-grossing animated film of all time?',
    options: ['Frozen II', 'The Lion King', 'Toy Story 4', 'Frozen'],
    answer: 'Frozen II',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "Gone with the Wind"?',
    options: ['Victor Fleming', 'Alfred Hitchcock', 'Federico Fellini', 'Stanley Kubrick'],
    answer: 'Victor Fleming',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional detective created by Raymond Chandler?',
    options: ['Philip Marlowe', 'Hercule Poirot', 'Sam Spade', 'Sherlock Holmes'],
    answer: 'Philip Marlowe',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "Casablanca"?',
    options: ['Ingrid Bergman', 'Audrey Hepburn', 'Vivien Leigh', 'Grace Kelly'],
    answer: 'Ingrid Bergman',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actor played the character Rocky Balboa in the "Rocky" film series?',
    options: ['Sylvester Stallone', 'Arnold Schwarzenegger', 'Bruce Willis', 'Jean-Claude Van Damme'],
    answer: 'Sylvester Stallone',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band Aerosmith?',
    options: ['Steven Tyler', 'Jon Bon Jovi', 'Freddie Mercury', 'David Bowie'],
    answer: 'Steven Tyler',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional planet in the "Star Trek" franchise?',
    options: ['Vulcan', 'Klingon', 'Romulus', 'Andor'],
    answer: 'Vulcan',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who directed the film "The Shawshank Redemption"?',
    options: ['Frank Darabont', 'David Fincher', 'Quentin Tarantino', 'Christopher Nolan'],
    answer: 'Frank Darabont',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the name of the fictional detective created by Dashiell Hammett?',
    options: ['Sam Spade', 'Hercule Poirot', 'Philip Marlowe', 'Sherlock Holmes'],
    answer: 'Sam Spade',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "One Flew Over the Cuckoo\'s Nest"?',
    options: ['Jack Nicholson', 'Marlon Brando', 'Robert De Niro', 'Al Pacino'],
    answer: 'Jack Nicholson',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional school attended by Hermione Granger?',
    options: ['Hogwarts School of Witchcraft and Wizardry', 'Beauxbatons Academy of Magic', 'Durmstrang Institute', 'Ilvermorny School of Witchcraft and Wizardry'],
    answer: 'Hogwarts School of Witchcraft and Wizardry',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who played the character Norman Bates in the film "Psycho"?',
    options: ['Anthony Perkins', 'Heath Ledger', 'Joaquin Phoenix', 'Christian Bale'],
    answer: 'Anthony Perkins',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What was the first feature-length color film ever released?',
    options: ['Gone with the Wind', 'The Wizard of Oz', 'Citizen Kane', 'Casablanca'],
    answer: 'Gone with the Wind',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead guitarist of the rock band Led Zeppelin?',
    options: ['Jimmy Page', 'Keith Richards', 'Eric Clapton', 'Jimi Hendrix'],
    answer: 'Jimmy Page',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actress played the character Katniss Everdeen in "The Hunger Games" film series?',
    options: ['Jennifer Lawrence', 'Emma Stone', 'Natalie Portman', 'Scarlett Johansson'],
    answer: 'Jennifer Lawrence',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Nirvana?',
    options: ['Kurt Cobain', 'Eddie Vedder', 'Dave Grohl', 'Chris Cornell'],
    answer: 'Kurt Cobain',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "Citizen Kane"?',
    options: ['Orson Welles', 'Alfred Hitchcock', 'Stanley Kubrick', 'Francis Ford Coppola'],
    answer: 'Orson Welles',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional detective created by Rex Stout?',
    options: ['Nero Wolfe', 'Hercule Poirot', 'Sherlock Holmes', 'Sam Spade'],
    answer: 'Nero Wolfe',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "The Sound of Music"?',
    options: ['Julie Andrews', 'Audrey Hepburn', 'Marilyn Monroe', 'Grace Kelly'],
    answer: 'Julie Andrews',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actor played the character James T. Kirk in the original "Star Trek" TV series?',
    options: ['William Shatner', 'Patrick Stewart', 'Leonard Nimoy', 'Chris Pine'],
    answer: 'William Shatner',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band Guns N\' Roses?',
    options: ['Axl Rose', 'Slash', 'Freddie Mercury', 'Steven Tyler'],
    answer: 'Axl Rose',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "The Godfather"?',
    options: ['Francis Ford Coppola', 'Martin Scorsese', 'Quentin Tarantino', 'Steven Spielberg'],
    answer: 'Francis Ford Coppola',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional detective created by Sue Grafton?',
    options: ['Kinsey Millhone', 'Hercule Poirot', 'Philip Marlowe', 'Sam Spade'],
    answer: 'Kinsey Millhone',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "Forrest Gump"?',
    options: ['Tom Hanks', 'Robert De Niro', 'Al Pacino', 'Denzel Washington'],
    answer: 'Tom Hanks',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actress starred as Princess Leia in the "Star Wars" franchise?',
    options: ['Carrie Fisher', 'Natalie Portman', 'Daisy Ridley', 'Felicity Jones'],
    answer: 'Carrie Fisher',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who played the character Clarice Starling in the film "The Silence of the Lambs"?',
    options: ['Jodie Foster', 'Julianne Moore', 'Michelle Pfeiffer', 'Sigourney Weaver'],
    answer: 'Jodie Foster',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What was the first feature-length 3D film ever released?',
    options: ['Bwana Devil', 'Avatar', 'House of Wax', 'The Creature from the Black Lagoon'],
    answer: 'Bwana Devil',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead guitarist of the rock band AC/DC?',
    options: ['Angus Young', 'Eddie Van Halen', 'Jimmy Page', 'Keith Richards'],
    answer: 'Angus Young',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor played the character Indiana Jones in the film series?',
    options: ['Harrison Ford', 'Tom Hanks', 'Liam Neeson', 'Mel Gibson'],
    answer: 'Harrison Ford',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band Metallica?',
    options: ['James Hetfield', 'Freddie Mercury', 'Axl Rose', 'Dave Mustaine'],
    answer: 'James Hetfield',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the highest-grossing animated film of the 1990s?',
    options: ['The Lion King', 'Toy Story', 'Aladdin', 'Beauty and the Beast'],
    answer: 'The Lion King',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "Pulp Fiction"?',
    options: ['Quentin Tarantino', 'Martin Scorsese', 'Christopher Nolan', 'Stanley Kubrick'],
    answer: 'Quentin Tarantino',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional detective created by P. D. James?',
    options: ['Adam Dalgliesh', 'Hercule Poirot', 'Philip Marlowe', 'Sam Spade'],
    answer: 'Adam Dalgliesh',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "Million Dollar Baby"?',
    options: ['Hilary Swank', 'Kate Winslet', 'Cate Blanchett', 'Nicole Kidman'],
    answer: 'Hilary Swank',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor played the character Han Solo in the original "Star Wars" trilogy?',
    options: ['Harrison Ford', 'Mark Hamill', 'Carrie Fisher', 'Anthony Daniels'],
    answer: 'Harrison Ford',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band The Rolling Stones?',
    options: ['Mick Jagger', 'Bono', 'Freddie Mercury', 'Steven Tyler'],
    answer: 'Mick Jagger',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who directed the film "The Dark Knight"?',
    options: ['Christopher Nolan', 'Tim Burton', 'David Fincher', 'Martin Scorsese'],
    answer: 'Christopher Nolan',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "Gladiator"?',
    options: ['Russell Crowe', 'Leonardo DiCaprio', 'Tom Hanks', 'Daniel Day-Lewis'],
    answer: 'Russell Crowe',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actress starred as Elle Woods in the film "Legally Blonde"?',
    options: ['Reese Witherspoon', 'Cameron Diaz', 'Julia Roberts', 'Jennifer Aniston'],
    answer: 'Reese Witherspoon',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What was the first feature-length animated film produced by Pixar?',
    options: ['Toy Story', 'A Bug\'s Life', 'Finding Nemo', 'Monsters, Inc.'],
    answer: 'Toy Story',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead guitarist of the rock band Queen?',
    options: ['Brian May', 'Jimi Hendrix', 'Eric Clapton', 'Jimmy Page'],
    answer: 'Brian May',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor played the character Jack Sparrow in the "Pirates of the Caribbean" film series?',
    options: ['Johnny Depp', 'Orlando Bloom', 'Geoffrey Rush', 'Javier Bardem'],
    answer: 'Johnny Depp',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Bon Jovi?',
    options: ['Jon Bon Jovi', 'Bono', 'Freddie Mercury', 'Steven Tyler'],
    answer: 'Jon Bon Jovi',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the highest-grossing superhero film of the 2000s?',
    options: ['The Dark Knight', 'Spider-Man', 'Iron Man', 'The Avengers'],
    answer: 'The Dark Knight',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "The Wizard of Oz"?',
    options: ['Victor Fleming', 'Frank Capra', 'Alfred Hitchcock', 'Orson Welles'],
    answer: 'Victor Fleming',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional detective created by Mickey Spillane?',
    options: ['Mike Hammer', 'Hercule Poirot', 'Philip Marlowe', 'Sam Spade'],
    answer: 'Mike Hammer',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actor played the character John McClane in the "Die Hard" film series?',
    options: ['Bruce Willis', 'Sylvester Stallone', 'Arnold Schwarzenegger', 'Mel Gibson'],
    answer: 'Bruce Willis',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "The Departed"?',
    options: ['Leonardo DiCaprio', 'Tom Hanks', 'Russell Crowe', 'Daniel Day-Lewis'],
    answer: 'Leonardo DiCaprio',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actress starred as Belle in the film "Beauty and the Beast"?',
    options: ['Emma Watson', 'Anne Hathaway', 'Keira Knightley', 'Natalie Portman'],
    answer: 'Emma Watson',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead guitarist of the rock band The Rolling Stones?',
    options: ['Keith Richards', 'Jimmy Page', 'Eric Clapton', 'Jimi Hendrix'],
    answer: 'Keith Richards',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actor played the character Ethan Hunt in the "Mission: Impossible" film series?',
    options: ['Tom Cruise', 'Brad Pitt', 'George Clooney', 'Matt Damon'],
    answer: 'Tom Cruise',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the highest-grossing animated film of the 2010s?',
    options: ['Frozen', 'Frozen II', 'Toy Story 4', 'The Lion King'],
    answer: 'Frozen',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "Fight Club"?',
    options: ['David Fincher', 'Quentin Tarantino', 'Martin Scorsese', 'Christopher Nolan'],
    answer: 'David Fincher',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "The Deer Hunter"?',
    options: ['Meryl Streep', 'Julie Andrews', 'Audrey Hepburn', 'Elizabeth Taylor'],
    answer: 'Meryl Streep',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actor starred as Luke Skywalker in the "Star Wars" franchise?',
    options: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Anthony Daniels'],
    answer: 'Mark Hamill',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band The Who?',
    options: ['Roger Daltrey', 'Bono', 'Freddie Mercury', 'Mick Jagger'],
    answer: 'Roger Daltrey',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who directed the film "Inception"?',
    options: ['Christopher Nolan', 'Steven Spielberg', 'David Fincher', 'Martin Scorsese'],
    answer: 'Christopher Nolan',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actress starred as Hermione Granger in the "Harry Potter" film series?',
    options: ['Emma Watson', 'Daniel Radcliffe', 'Rupert Grint', 'Bonnie Wright'],
    answer: 'Emma Watson',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What was the first feature-length stop-motion animated film ever released?',
    options: ['The Nightmare Before Christmas', 'Coraline', 'ParaNorman', 'Isle of Dogs'],
    answer: 'The Nightmare Before Christmas',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead guitarist of the rock band Pink Floyd?',
    options: ['David Gilmour', 'Jimmy Page', 'Eric Clapton', 'Jimi Hendrix'],
    answer: 'David Gilmour',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor played the character Wolverine in the "X-Men" film series?',
    options: ['Hugh Jackman', 'Ryan Reynolds', 'Patrick Stewart', 'James McAvoy'],
    answer: 'Hugh Jackman',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Red Hot Chili Peppers?',
    options: ['Anthony Kiedis', 'Eddie Vedder', 'Kurt Cobain', 'Dave Grohl'],
    answer: 'Anthony Kiedis',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "Casablanca"?',
    options: ['Michael Curtiz', 'Alfred Hitchcock', 'Orson Welles', 'Billy Wilder'],
    answer: 'Michael Curtiz',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "The Iron Lady"?',
    options: ['Meryl Streep', 'Kate Winslet', 'Cate Blanchett', 'Julianne Moore'],
    answer: 'Meryl Streep',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which actor starred as Batman in the original film series?',
    options: ['Michael Keaton', 'Christian Bale', 'Val Kilmer', 'George Clooney'],
    answer: 'Michael Keaton',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Radiohead?',
    options: ['Thom Yorke', 'Eddie Vedder', 'Chris Martin', 'Bono'],
    answer: 'Thom Yorke',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the name of the fictional planet in the "Star Wars" franchise?',
    options: ['Tatooine', 'Hoth', 'Endor', 'Coruscant'],
    answer: 'Tatooine',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What is the name of the fictional detective created by Robert B. Parker?',
    options: ['Spenser', 'Hercule Poirot', 'Philip Marlowe', 'Sam Spade'],
    answer: 'Spenser',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "American Beauty"?',
    options: ['Kevin Spacey', 'Tom Hanks', 'Leonardo DiCaprio', 'Sean Penn'],
    answer: 'Kevin Spacey',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead guitarist of the rock band Van Halen?',
    options: ['Eddie Van Halen', 'Jimmy Page', 'Slash', 'Eric Clapton'],
    answer: 'Eddie Van Halen',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor played the character Spider-Man in the original film series?',
    options: ['Tobey Maguire', 'Andrew Garfield', 'Tom Holland', 'Robert Downey Jr.'],
    answer: 'Tobey Maguire',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Pearl Jam?',
    options: ['Eddie Vedder', 'Chris Cornell', 'Kurt Cobain', 'Dave Grohl'],
    answer: 'Eddie Vedder',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the highest-grossing animated film of the 2020s (so far)?',
    options: ['Frozen II', 'The Lion King', 'Toy Story 4', 'Minions: The Rise of Gru'],
    answer: 'Frozen II',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "The Matrix"?',
    options: ['The Wachowskis', 'James Cameron', 'Steven Spielberg', 'Christopher Nolan'],
    answer: 'The Wachowskis',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "The Reader"?',
    options: ['Kate Winslet', 'Meryl Streep', 'Julianne Moore', 'Cate Blanchett'],
    answer: 'Kate Winslet',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band R.E.M.?',
    options: ['Michael Stipe', 'Bono', 'Thom Yorke', 'Eddie Vedder'],
    answer: 'Michael Stipe',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "The Lord of the Rings: The Return of the King"?',
    options: ['Peter Jackson', 'Guillermo del Toro', 'Steven Spielberg', 'Christopher Nolan'],
    answer: 'Peter Jackson',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the name of the fictional detective created by John D. MacDonald?',
    options: ['Travis McGee', 'Hercule Poirot', 'Philip Marlowe', 'Sam Spade'],
    answer: 'Travis McGee',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "There Will Be Blood"?',
    options: ['Daniel Day-Lewis', 'Joaquin Phoenix', 'Leonardo DiCaprio', 'Sean Penn'],
    answer: 'Daniel Day-Lewis',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What was the first feature-length film to be released on DVD?',
    options: ['Twister', 'The Fugitive', 'The Mask of Zorro', 'A Bug\'s Life'],
    answer: 'Twister',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead guitarist of the rock band Guns N\' Roses?',
    options: ['Slash', 'Angus Young', 'Jimmy Page', 'Kirk Hammett'],
    answer: 'Slash',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Foo Fighters?',
    options: ['Dave Grohl', 'Eddie Vedder', 'Thom Yorke', 'Chris Martin'],
    answer: 'Dave Grohl',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "The Blind Side"?',
    options: ['Sandra Bullock', 'Meryl Streep', 'Julianne Moore', 'Cate Blanchett'],
    answer: 'Sandra Bullock',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actor starred as Harry Potter in the "Harry Potter" film series?',
    options: ['Daniel Radcliffe', 'Rupert Grint', 'Tom Felton', 'Emma Watson'],
    answer: 'Daniel Radcliffe',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "The Pianist"?',
    options: ['Adrien Brody', 'Tom Hanks', 'Daniel Day-Lewis', 'Sean Penn'],
    answer: 'Adrien Brody',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What was the first feature-length film to be released in IMAX format?',
    options: ['Wings of Courage', 'Avatar', 'The Dark Knight', 'Hubble 3D'],
    answer: 'Wings of Courage',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead guitarist of the rock band Queen?',
    options: ['Brian May', 'Jimmy Page', 'Eddie Van Halen', 'Angus Young'],
    answer: 'Brian May',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Red Hot Chili Peppers?',
    options: ['Anthony Kiedis', 'Eddie Vedder', 'Bono', 'Thom Yorke'],
    answer: 'Anthony Kiedis',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the highest-grossing superhero film of the 1990s?',
    options: ['Batman', 'Spider-Man', 'Superman Returns', 'X-Men'],
    answer: 'Batman',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "Saving Private Ryan"?',
    options: ['Steven Spielberg', 'Martin Scorsese', 'Francis Ford Coppola', 'Clint Eastwood'],
    answer: 'Steven Spielberg',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "Silver Linings Playbook"?',
    options: ['Jennifer Lawrence', 'Meryl Streep', 'Cate Blanchett', 'Natalie Portman'],
    answer: 'Jennifer Lawrence',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band The Who?',
    options: ['Roger Daltrey', 'Bono', 'Freddie Mercury', 'Mick Jagger'],
    answer: 'Roger Daltrey',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who won the Best Actor Oscar for his role in the film "Mystic River"?',
    options: ['Sean Penn', 'Tom Hanks', 'Daniel Day-Lewis', 'Joaquin Phoenix'],
    answer: 'Sean Penn',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead guitarist of the rock band Led Zeppelin?',
    options: ['Jimmy Page', 'Slash', 'Brian May', 'Angus Young'],
    answer: 'Jimmy Page',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead singer of the band Pearl Jam?',
    options: ['Eddie Vedder', 'Chris Cornell', 'Dave Grohl', 'Kurt Cobain'],
    answer: 'Eddie Vedder',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'What is the highest-grossing animated film of the 2010s?',
    options: ['Frozen', 'Zootopia', 'The Incredibles 2', 'Toy Story 4'],
    answer: 'Frozen',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "The Lord of the Rings: The Two Towers"?',
    options: ['Peter Jackson', 'Guillermo del Toro', 'Christopher Nolan', 'James Cameron'],
    answer: 'Peter Jackson',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Best Actress Oscar for her role in the film "Black Swan"?',
    options: ['Natalie Portman', 'Meryl Streep', 'Cate Blanchett', 'Anne Hathaway'],
    answer: 'Natalie Portman',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who is the lead singer of the band Radiohead?',
    options: ['Thom Yorke', 'Chris Martin', 'Eddie Vedder', 'Bono'],
    answer: 'Thom Yorke',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who directed the film "The Lord of the Rings: The Fellowship of the Ring"?',
    options: ['Peter Jackson', 'Steven Spielberg', 'Christopher Nolan', 'James Cameron'],
    answer: 'Peter Jackson',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which actress starred as Hermione Granger in the "Harry Potter" film series?',
    options: ['Emma Watson', 'Natalie Portman', 'Lily James', 'Keira Knightley'],
    answer: 'Emma Watson',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What was the first feature-length film to be released in IMAX format?',
    options: ['Wings of Courage', 'Avatar', 'The Dark Knight', 'Hubble 3D'],
    answer: 'Wings of Courage',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who is the lead guitarist of the rock band Queen?',
    options: ['Brian May', 'Jimmy Page', 'Eddie Van Halen', 'Angus Young'],
    answer: 'Brian May',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which iconic rock \'n\' roll band, fronted by Mick Jagger, is known for hits like "Satisfaction" and "Paint It Black"?',
    options: ['The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Queen'],
    answer: 'The Rolling Stones',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who was known as the "King of Rock and Roll" and recorded songs like "Hound Dog" and "Jailhouse Rock"?',
    options: ['Elvis Presley', 'Chuck Berry', 'Jerry Lee Lewis', 'Little Richard'],
    answer: 'Elvis Presley',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"Yesterday," "Let It Be," and "Hey Jude" are classic hits by which legendary British band?',
    options: ['The Beatles', 'The Rolling Stones', 'Led Zeppelin', 'Queen'],
    answer: 'The Beatles',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which female singer, known as the "Queen of Jazz," had popular songs like "Summertime" and "Strange Fruit"?',
    options: ['Ella Fitzgerald', 'Billie Holiday', 'Nina Simone', 'Sarah Vaughan'],
    answer: 'Billie Holiday',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who was the "King of Pop" and known for hit albums like "Thriller" and "Bad"?',
    options: ['Michael Jackson', 'Prince', 'Elvis Presley', 'Stevie Wonder'],
    answer: 'Michael Jackson',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What American folk singer is famous for songs like "Blowin\' in the Wind" and "The Times They Are a-Changin\'"?',
    options: ['Bob Dylan', 'Johnny Cash', 'Joni Mitchell', 'Simon & Garfunkel'],
    answer: 'Bob Dylan',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which Motown artist, known as the "Prince of Soul," recorded hits like "Ain\'t No Mountain High Enough" and "How Sweet It Is (To Be Loved By You)"?',
    options: ['Marvin Gaye', 'Stevie Wonder', 'Smokey Robinson', 'Otis Redding'],
    answer: 'Marvin Gaye',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'In what decade did The Beatles make their debut on The Ed Sullivan Show?',
    options: ['1960s', '1970s', '1950s', '1980s'],
    answer: '1960s',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"Respect," "Natural Woman," and "Think" are some of the popular songs by which legendary soul singer?',
    options: ['Aretha Franklin', 'Diana Ross', 'Tina Turner', 'Gladys Knight'],
    answer: 'Aretha Franklin',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which famous pianist and composer is known for "Moonlight Sonata," "Fur Elise," and "Symphony No. 9"?',
    options: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frederic Chopin'],
    answer: 'Ludwig van Beethoven',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who was the lead singer of the band Queen and known for his dynamic stage presence and powerful voice?',
    options: ['Freddie Mercury', 'Robert Plant', 'David Bowie', 'Elton John'],
    answer: 'Freddie Mercury',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which legendary guitarist, often called the "God of Guitar," was known for hits like "Purple Haze" and "Hey Joe"?',
    options: ['Jimi Hendrix', 'Eric Clapton', 'Jimmy Page', 'Stevie Ray Vaughan'],
    answer: 'Jimi Hendrix',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What rock band, led by Robert Plant and Jimmy Page, is famous for songs like "Stairway to Heaven" and "Whole Lotta Love"?',
    options: ['Led Zeppelin', 'The Rolling Stones', 'Pink Floyd', 'The Who'],
    answer: 'Led Zeppelin',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"Sweet Child o\' Mine" and "November Rain" are hits by which iconic rock band from the 1980s and 1990s?',
    options: ['Guns N\' Roses', 'Nirvana', 'Metallica', 'Bon Jovi'],
    answer: 'Guns N\' Roses',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who won the Eurovision Song Contest in 1974 with the song "Waterloo" and became a global sensation?',
    options: ['ABBA', 'The Beatles', 'Queen', 'The Rolling Stones'],
    answer: 'ABBA',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which American singer is known as the "Queen of Country" and had hit songs like "Jolene" and "I Will Always Love You"?',
    options: ['Dolly Parton', 'Loretta Lynn', 'Tammy Wynette', 'Reba McEntire'],
    answer: 'Dolly Parton',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who sang the theme song for the James Bond film "Goldfinger" in 1964?',
    options: ['Shirley Bassey', 'Diana Ross', 'Nancy Sinatra', 'Tina Turner'],
    answer: 'Shirley Bassey',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"I Will Survive" and "Never Can Say Goodbye" are disco hits by which American singer?',
    options: ['Gloria Gaynor', 'Donna Summer', 'Cher', 'Diana Ross'],
    answer: 'Gloria Gaynor',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'In the 1960s, which band released the album "Pet Sounds," which is considered one of the greatest albums of all time?',
    options: ['The Beach Boys', 'The Rolling Stones', 'The Beatles', 'The Who'],
    answer: 'The Beach Boys',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What American singer-songwriter is known for hits like "Fire and Rain" and "You\'ve Got a Friend"?',
    options: ['James Taylor', 'Cat Stevens', 'Paul Simon', 'Elton John'],
    answer: 'James Taylor',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which classic TV show features a family that includes characters named Fred, Wilma, and Pebbles?',
    options: ['The Flintstones', 'The Jetsons', 'Scooby-Doo', 'The Simpsons'],
    answer: 'The Flintstones',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who was the original host of the television game show "Wheel of Fortune"?',
    options: ['Chuck Woolery', 'Pat Sajak', 'Alex Trebek', 'Bob Barker'],
    answer: 'Chuck Woolery',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'In "I Love Lucy," what was the name of Lucy\'s husband?',
    options: ['Ricky Ricardo', 'Fred Mertz', 'Andy Taylor', 'Barney Rubble'],
    answer: 'Ricky Ricardo',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Which TV series, set in a bar in Boston, featured characters like Sam Malone, Diane Chambers, and Norm Peterson?',
    options: ['Cheers', 'Friends', 'Frasier', 'Seinfeld'],
    answer: 'Cheers',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What was the name of the iconic spaceship commanded by Captain James T. Kirk in the original "Star Trek" series?',
    options: ['USS Enterprise', 'Millennium Falcon', 'Star Destroyer', 'TARDIS'],
    answer: 'USS Enterprise',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who played the role of Archie Bunker in the 1970s sitcom "All in the Family"?',
    options: ['Carroll O\'Connor', 'Jackie Gleason', 'Redd Foxx', 'Dick Van Dyke'],
    answer: 'Carroll O\'Connor',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'In "The Andy Griffith Show," what was the name of Andy\'s son?',
    options: ['Opie', 'Bobby', 'Ritchie', 'Buddy'],
    answer: 'Opie',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What medical drama series, set in a fictional hospital called "Seattle Grace," gained widespread popularity during the 2000s?',
    options: ['Grey\'s Anatomy', 'ER', 'House', 'Scrubs'],
    answer: 'Grey\'s Anatomy',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who starred as J.R. Ewing in the long-running TV series "Dallas"?',
    options: ['Larry Hagman', 'Patrick Duffy', 'David Hasselhoff', 'John Forsythe'],
    answer: 'Larry Hagman',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"The Golden Girls" featured four elderly women living together in Miami. Can you name all four characters?',
    options: ['Dorothy, Rose, Blanche, Sophia', 'Mary, Rhoda, Phyllis, Sue Ann', 'Carrie, Samantha, Charlotte, Miranda', 'Laverne, Shirley, Carmine, Squiggy'],
    answer: 'Dorothy, Rose, Blanche, Sophia',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What animated TV show follows the life of a yellow, four-fingered family living in the fictional town of Springfield?',
    options: ['The Simpsons', 'Family Guy', 'South Park', 'Futurama'],
    answer: 'The Simpsons',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Who played the role of "Hawkeye" Pierce in the TV series "MAS*H"?',
    options: ['Alan Alda', 'Donald Sutherland', 'Martin Sheen', 'Gary Burghoff'],
    answer: 'Alan Alda',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"The Twilight Zone" was a popular TV series known for its sci-fi and supernatural stories. Who was the show\'s creator?',
    options: ['Rod Serling', 'Alfred Hitchcock', 'Steven Spielberg', 'Ray Bradbury'],
    answer: 'Rod Serling',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'In the TV show "Friends," which character was known for saying "How you doin\'?" and had a pet chick named Yasmine?',
    options: ['Joey Tribbiani', 'Chandler Bing', 'Ross Geller', 'Phoebe Buffay'],
    answer: 'Joey Tribbiani',
    category: 'pop culture',
    difficulty: 'hard'
  },
  {
    question: 'Which TV show featured a high school teacher turned methamphetamine manufacturer named Walter White?',
    options: ['Breaking Bad', 'The Sopranos', 'Lost', 'Dexter'],
    answer: 'Breaking Bad',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who was the star of the TV show "I Dream of Jeannie," where a genie grants wishes to an astronaut?',
    options: ['Barbara Eden', 'Elizabeth Montgomery', 'Lucille Ball', 'Mary Tyler Moore'],
    answer: 'Barbara Eden',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: '"Happy Days" was a popular TV show set in the 1950s. What was the name of the cool and motorcycle-loving character played by Henry Winkler?',
    options: ['The Fonz', 'Potsie', 'Ralph Malph', 'Chachi'],
    answer: 'The Fonz',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'In the TV series "The Brady Bunch," how many children did Carol and Mike Brady have combined?',
    options: ['6', '8', '4', '10'],
    answer: '6',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'What TV show features a detective named Columbo, who is known for his shabby appearance and the catchphrase "Just one more thing..."?',
    options: ['Columbo', 'Magnum, P.I.', 'Hawaii Five-O', 'Matlock'],
    answer: 'Columbo',
    category: 'pop culture',
    difficulty: 'easy'
  },
  {
    question: 'Who hosted the TV talent show "The Ed Sullivan Show," which featured performances by various music artists and entertainers?',
    options: ['Ed Sullivan', 'Johnny Carson', 'Dick Clark', 'Bob Hope'],
    answer: 'Ed Sullivan',
    category: 'pop culture',
    difficulty: 'easy'
  }

];