// Sample blog data
const blogData = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    content:
      "Artificial intelligence (AI) has rapidly become one of the most transformative technologies of our time. With its ability to process massive datasets, identify patterns, and even make decisions in real-time, AI is reshaping everything from healthcare to finance and retail. As AI continues to evolve, it is influencing nearly every industry and impacting our daily lives, whether through personalized recommendations, smart assistants, or automated customer support. Currently, AI technology has achieved significant advancements in machine learning, natural language processing, and computer vision. These developments have powered popular applications such as chatbots, virtual assistants, and recommendation engines, enhancing user experiences and improving efficiency. However, as AI becomes more sophisticated, it is no longer just an auxiliary tool—it’s actively participating in complex decision-making processes, even in high-stakes environments like autonomous driving and medical diagnostics. One of the major trends shaping the future of AI is the rise of generative AI models like ChatGPT and DALL-E, which can create content, art, and text with minimal human intervention. Additionally, ethical and privacy considerations are becoming paramount, as companies strive to create transparent and trustworthy AI systems. There is also growing interest in explainable AI, which aims to make AI’s decision-making processes more understandable to humans, especially in fields where accountability is essential. Another trend includes the adoption of edge computing, which allows AI processing to occur closer to the data source, enhancing speed and security. AI’s impact on various industries is profound. In healthcare, AI is revolutionizing diagnostics, enabling early detection of diseases, and assisting in personalized treatment plans. Finance is leveraging AI for fraud detection, algorithmic trading, and improving customer interactions. Meanwhile, in education, AI-driven platforms provide personalized learning experiences, catering to students' unique learning paces and styles, which has become especially valuable in remote learning environments. Despite these promising advancements, the path forward for AI is not without challenges. Concerns over job displacement, privacy, and bias within algorithms continue to pose significant ethical questions. There is an urgent need for regulatory frameworks and ethical guidelines to ensure that AI systems are fair, unbiased, and respectful of privacy. Companies and governments are working together to develop standards that prioritize ethical considerations and safeguard user data. In summary, AI offers immense promise for improving efficiency, enhancing decision-making, and solving complex problems. However, balancing these benefits with ethical considerations is essential to ensure a future where AI enhances rather than hinders human potential. Staying informed and actively engaging in discussions about AI's future will be crucial as we enter an era increasingly influenced by artificial intelligence.",

    image: "/images/support.png",
    category: "Tech",
  },
  {
    id: 2,
    title: "Health Benefits of Yoga",
    content:
      "Yoga, an ancient practice with roots in India, has gained global popularity for its holistic benefits, which encompass physical, mental, and spiritual well-being. As people seek ways to improve their health and manage stress, yoga offers an accessible and effective path for people of all ages and fitness levels. It has evolved into a versatile practice with forms suited for everything from high-energy workouts to relaxing, meditative sessions.The physical health benefits of yoga are extensive. Through a combination of postures, breathing techniques, and stretching, yoga enhances flexibility, builds strength, and improves posture. Practicing yoga regularly can lead to better balance, reduced risk of injury, and a stronger core, which supports overall physical stability. Yoga also benefits cardiovascular health, as certain forms like Vinyasa increase heart rate, helping improve circulation and lowering blood pressure. Additionally, yoga is an excellent tool for weight management, as it promotes mindful eating and reduces stress, both of which can help in maintaining a healthy weight.Beyond physical benefits, yoga offers substantial mental health advantages. Many people turn to yoga as a way to reduce stress and anxiety, and research has shown that it can lower cortisol levels, helping the body manage stress better. The meditative aspect of yoga encourages mindfulness, which can improve focus, enhance mental clarity, and reduce symptoms of depression and anxiety. Practicing yoga also improves mood, as the combination of physical movement and mindful breathing increases the release of endorphins, which are natural mood enhancers.In addition to physical and mental health benefits, yoga provides emotional and spiritual growth. Practitioners often experience a heightened sense of peace and self-awareness, as yoga encourages a connection between body, mind, and spirit. For those interested in the spiritual aspects of yoga, certain practices like Kundalini yoga offer tools for self-discovery, spiritual awareness, and personal growth, making yoga a transformative journey for many.Different types of yoga offer unique benefits, catering to various preferences and needs. Hatha yoga is excellent for beginners due to its slower pace, while Vinyasa and Ashtanga are more dynamic, focusing on building strength and endurance. Yin yoga, on the other hand, emphasizes deep stretching and is ideal for relaxation. Exploring different types allows practitioners to find a practice that aligns with their goals and physical capabilities.In conclusion, yoga's holistic approach to wellness makes it an exceptional practice for enhancing physical health, mental well-being, and emotional stability. With such a wide range of styles, yoga is accessible to everyone, regardless of fitness level. Starting a yoga practice can be the beginning of a journey toward improved health, mindfulness, and personal growth, making it an invaluable tool in today’s fast-paced world.",
    image: "/images/shopping.jpg",
    category: "Health",
  },
  {
    id: 3,
    title: "Investing for Beginners",
    content:
      "Investing is a powerful tool for growing wealth and achieving long-term financial goals, but for beginners, the world of investing can seem complex and intimidating. By understanding the basics and following a disciplined approach, even those new to investing can start building a secure financial future. Learning to invest early can maximize returns over time, making investing a crucial part of financial planning.The main reason to invest is to put money to work, allowing it to grow beyond traditional savings. Investing provides the opportunity for money to appreciate due to compounding, which means earning returns not just on the initial amount but also on the accumulated gains. This growth can help individuals stay ahead of inflation and reach goals such as buying a home, funding education, or securing retirement.There are several types of investments beginners can explore. Stocks represent ownership in a company and offer higher growth potential but come with higher risk. Bonds, on the other hand, are loans to companies or governments and typically provide steadier returns with lower risk. Mutual funds and exchange-traded funds (ETFs) offer diversification by pooling multiple stocks or bonds into a single investment, making them suitable for beginners seeking a balanced approach. Real estate is another option, offering tangible asset ownership, though it requires a higher initial investment and knowledge of the market. For those interested in new, higher-risk investments, cryptocurrency has emerged as an alternative, though it should be approached with caution due to its volatility.Getting started in investing involves setting clear financial goals and determining an acceptable level of risk. Creating a budget to allocate funds for investment is essential to ensure regular contributions without impacting day-to-day expenses. Beginners should start with a brokerage account, which can be set up with financial institutions or online platforms. Researching investment options, reviewing company reports, and understanding financial metrics can provide insights and aid in making informed decisions.It’s important to avoid common pitfalls that often discourage new investors. Trying to time the market or reacting emotionally to short-term fluctuations can lead to poor decisions. Additionally, beginners should prioritize diversification to spread risk across various assets rather than concentrating on a single stock or investment type. Viewing investing as a long-term endeavor helps to mitigate the effects of market volatility and encourages a disciplined approach.In summary, while investing may seem daunting, starting small and staying informed can set beginners on a path toward financial health and security. By continuing to learn and taking a thoughtful, long-term approach, anyone can navigate the world of investing with confidence and build wealth over time. Investing is a journey that, with patience and knowledge, can yield substantial rewards.",
    image: "./images/customer.png",
    category: "Finance",
  },
  // Add more blogs as needed
];

// Elements
const mainBlogContent = document.getElementById("mainBlogContent");
const sidebarBlogs = document.getElementById("sidebarBlogs");

// Load main blog content
function loadMainBlog(blog) {
  mainBlogContent.innerHTML = `
    <img src="${blog.image}" alt="Blog image" class="w-full h-80 object-cover rounded-lg mb-4" />
    <h2 class="text-3xl font-bold mb-4">${blog.title}</h2>
    <p class="text-gray-700 leading-relaxed">${blog.content}</p>
  `;
}

// Load sidebar blogs with images and headings
function loadSidebarBlogs() {
  blogData.forEach((blog) => {
    const blogLink = document.createElement("div");
    blogLink.className =
      "flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition";

    blogLink.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" class="w-16 h-16 object-cover rounded-lg shadow-md" />
      <div>
        <h3 class="text-lg font-semibold text-gray-800">${blog.title}</h3>
        <p class="text-sm text-gray-500">${blog.category}</p>
      </div>
    `;

    blogLink.addEventListener("click", () => loadMainBlog(blog));
    sidebarBlogs.appendChild(blogLink);
  });
}

// Initial Load: Show first blog in main content area and load sidebar blogs
loadMainBlog(blogData[0]);
loadSidebarBlogs();
