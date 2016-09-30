'use strict'

let fakeInfo = require('../seed_generator.js')

exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE organization_id_seq RESTART WITH 11')
    .then(function() {
      return knex('organization').del()
    })
    .then(function () {
      return Promise.all([
        knex('organization').insert({
          id: 1,
          user_name: 'PosnerCenterAdmin',
          password: fakeInfo.password(),
          organization_name: 'Posner Center for International Development',
          about: 'We bring help and hope to the hidden and hurting! Colorado alone is home to more than 200 organizations and social ventures focusing on international development, with work encompassing agriculture, community development, education, energy, health, infrastructure, microfinance, and various other fields. We share similar goals, serve similar populations, and confront similar financial challenges. Yet most organizations operate in isolation from one another. The Posner Center disrupts this phenomenon by bringing together over 60 development-oriented businesses and organizations in a 25,000 square-foot shared space in Denver’s Curtis Park neighborhood to spur innovation by enabling groups to cross-pollinate through the exchange of ideas, the overlap of programming, and the generation of more comprehensive and lasting solutions to global poverty.',
          street: '1031 33rd Street',
          city: 'Denver',
          state: 'CO',
          org_logo_url:"http://www.bluedotlaw.com/wp-content/uploads/2014/05/Posner-Center.jpg",
          zip: '80205',
          contact: 'Jessica Harig',
          email: 'PosnerFaker@posnerFaker.org',
          phone_number: '720-382-7631',
          website: 'http://www.posnercenter.org/'
        }),
        knex('organization').insert({
          id: 2,
          user_name: 'DenverBiennialAdmin',
          password: fakeInfo.password(),
          organization_name: 'Denver Biennial of the Americas',
          about: 'The Biennial of the Americas is an international festival of ideas, art, and culture hosted in Denver, Colorado, that provides a nonpartisan platform for leaders in business, government, civil society, and the arts to examine the significant issues impacting life in the Americas. During his tenure as Mayor of Denver, Colorado Governor John Hickenlooper developed a vision for celebrating the Americas in Denver and highlighting the city as a center for intellectual engagement. In its 2010 inaugural year, the Biennial welcomed national and international visitors for a month-long festival celebrating the artistic, intellectual, and political spheres of the Americas. After a successful debut in 2010, the Biennial of the Americas looks forward to 2013 and beyond with great excitement.',
          street: '1490 Lafayette Street, Suite 101',
          city: 'Denver',
          state: 'CO',
          org_logo_url:"http://biennialoftheamericas.org/wp-content/uploads/2015/01/New-Logo-Website-Banner-3-1200x675.jpg",
          zip: '80218',
          contact: 'Brett Heyl',
          email: 'fake@biennialoftheamericas.org',
          phone_number: '303-261-8823',
          website: 'http://www.biennialoftheamericas.org'
        }),
        knex('organization').insert({
          id: 3,
          user_name: 'WildAgainAdmin',
          password: fakeInfo.password(),
          organization_name: 'Wild Once More Rehabilitation Center',
          about: 'Wild Once More Rehabilitation Center is a 501(c)(3) Colorado non-profit corporation dedicated to rehabilitating orphaned, injured and sick wildlife and returning those animals to the wild. We also acknowledge the valuable relationship between humans and wildlife, and work to honor and improve that relationship through volunteer programs and education. We encourage responsible stewardship of wildlife and its habitat in all that we do.',
          street: '15200 Clinton Street',
          city: 'Brighton',
          state: 'CO',
          org_logo_url:"http://static1.squarespace.com/static/54f126cce4b04ba2593802ce/t/566a8af469492ef029e02451/1468828906054/?format=1500w",
          zip: '80602',
          contact: 'Carol Monaco',
          email: 'fake@wildoncemore.org',
          phone_number: '720-417-3842',
          website: 'http://www.wildoncemore.org'
        }),
        knex('organization').insert({
          id: 4,
          user_name: 'FlatironsH4HAdmin',
          password: fakeInfo.password(),
          organization_name: 'Flatirons Habitat for Humanity',
          about: 'Flatirons Habitat for Humanity is an ecumencial housing ministry, enabling low-income families to become homeowners by partnering with them to build simple decent homes. Our goal is to eliminate poverty housing and homelessness locally and globally.',
          street: '2540 Frontier Avenue',
          city: 'Boulder',
          state: 'CO',
          org_logo_url:"http://static.wixstatic.com/media/d78622_e0afec19bb0beb72eaabf85df8c12a39.jpg",
          zip: '80301',
          contact: 'Julie Zenor',
          email: 'fake@habitatforhumanityCO.org',
          phone_number: '303-447-3787',
          website: 'http://www.flatironshabitat.org'
        }),
        knex('organization').insert({
          id: 5,
          user_name: 'DRMAdmin',
          password: fakeInfo.password(),
          organization_name: 'Denver Rescue Mission',
          about:'Founded in 1892, the Denver Rescue Mission is the oldest full-service relief agency in the Rocky Mountain region. The Mission, a Colorado non-profit corporation, provides food, clothing, shelter, medical, education, and rehabilitation programs free of charge.',
          street: '6100 Smith Road',
          city: 'Denver',
          state: 'CO',
          org_logo_url:"http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/drm.jpg",
          zip: '80216',
          contact: 'Lissa Scott',
          email: 'fake@denverrescuemission.org',
          phone_number: '303-953-3902',
          website: 'http://www.denverrescuemission.org'
        }),
        knex('organization').insert({
          id: 6,
          user_name: 'EGFAdmin',
          password: fakeInfo.password(),
          organization_name: 'Emily Griffith Foundation',
          about: 'The Emily Griffith Foundation was established in 1990 as a 501(c)3 nonprofit corporation. The Emily Griffith Foundation is governed by a board of directors comprised of educators, business and industry leaders, and community representatives. The Foundation has been supported by over 150 businesses and organizations and has generated over $5.5 million since 1990. With your help, the Foundation has provided scholarships to approximately 350 students annually.To help Emily Griffith Technical College provide education "for all who wish to learn."',
          street: '1860 Lincoln Street, Suite 605',
          city: 'Denver',
          state: 'CO',
          org_logo_url:"http://ddndesign.com/wp-content/uploads/2014/12/EGF.gif",
          zip: '80203',
          contact: 'Stephanie Fry',
          email: 'fake@emilygriffithfoundation.org',
          phone_number: '720-423-4724',
          website: 'http://www.emilygriffithfoundation.org'
        }),
        knex('organization').insert({
          id: 7,
          user_name: 'PuebloStepUp_Admin',
          password: fakeInfo.password(),
          organization_name: 'Pueblo StepUp',
          about: 'Pueblo StepUp is a 501(c)3 nonprofit whose mission is to positively affect the health, well-being and access to healthcare for Pueblo\'s underserved. Pueblo StepUp helps struggling children, pregnant women, families, seniors, and disabled individuals attain health and medical assistance in Pueblo and Pueblo County. Through our Medical Assistant (MA) site program, we can provide eligibility determination and enrollment into public programs such as Medicaid, Child Health Plan Plus (CHP+), Adult Medicaid, Long Term Care, and Medicaid buy-in programs. Our Health Communities program offers case management and educational services to pregnant mothers and children enrolled in Medicaid and CHP+. Our clients regard our program as life changing for themselves, their families, and our community. We have been able to provide quick enrollment services for those who need emergency treatment, and preventative care for those who need dental and prenatal services. Our services have been recognized by state-level health care foundations for connecting individuals to healthcare and our ability to offer services that have lasting community impact.',
          street: '1925 E Orman Avenue, Ste G-52',
          city: 'Pueblo',
          state: 'CO',
          org_logo_url:"http://www.guidestar.org/ViewEdoc.aspx?eDocId=1146718&approved=True",
          zip: '81004',
          contact: 'Kiah Martin',
          email: 'fake@pueblostepup.org',
          phone_number: '719-557-3881',
          website: 'http://pueblostepup.org'
        }),
        knex('organization').insert({
          id: 8,
          user_name: 'SR_Admin',
          password: fakeInfo.password(),
          organization_name: 'Sustainable Roots',
          about: 'Sustainable Roots is a unique volunteer experience in Ecuador. Volunteer teaching English, working with kids and helping us develop other program ideas. See our volunteer page for more details. The directors and founders of Sustainable Roots are a group of Biologists, Artists, Teachers, and Friends who met in Cosanga, Ecuador in 2005 and shared the vision to empower and educate the local community on the importance of sustainable living. Sustainable Roots is dedicated to environmental preservation and sustainable development in communities of Latin America. We strive to enable communities to develop a healthy, sustainable, local economy and environment, all while maintaining their cultural pride and heritage. We work hand in hand with communities and see our role as facilitators of projects born from the communities ideas and needs. We are currently working in the community of Cosanga, Ecuador. In the Fall of 2010 we started our work on the ground and have structured English classes for all age levels (the community’s number one desire), an informal after-school program and have built two organic greenhouses!',
          street: 'PO Box 1961',
          city: 'Grand Junction',
          state: 'CO',
          org_logo_url:"http://northwestleadership.org/wp-content/uploads/2013/04/Sustainable-Roots-copy-300x168.png",
          zip: '81502',
          contact: 'Toni Walters',
          email: 'fake@sustainable-roots.org/',
          phone_number: '970-462-2860',
          website: 'http://sustainable-roots.org/'
        }),
        knex('organization').insert({
          id: 9,
          user_name: 'GDI_FortCollins',
          password: fakeInfo.password(),
          organization_name: 'Girl Develop It - Fort Collins',
          about: 'Girl Develop It is a nonprofit organization that provides affordable programs for adult women interested in learning web and software development in a judgment-free environment. Our vision is to create a network of empowered women who feel confident in their abilities to code and build beautiful web and mobile applications. By teaching women around the world from diverse backgrounds to learn software development, we can help women improve their careers and confidence in their everyday lives. We are committed to making sure women of all races, education levels, income and upbringing can build confidence in their skill set to develop web and mobile applications. Our goal is to provide powerful hands-on programs to women seeking professional help in software development and create basic to advanced web and mobile applications.',
          street: '242 Linden Street',
          city: 'Fort Collins',
          state: 'CO',
          org_logo_url:"http://www.innovationews.com/content/uploads/2014/05/circle-gdi-logo.png",
          zip: '80524',
          contact: 'Daun Davids',
          email: 'fake@girldevelopit.com',
          phone_number: fakeInfo.phone(),
          website: 'https://www.girldevelopit.com/chapters/fort-collins'
        }),
        knex('organization').insert({
          id: 10,
          user_name: 'Gal_Platte',
          password: fakeInfo.password(),
          organization_name: 'Galvanize - Platte',
          about: 'We believe in making education and growth accessible to anyone – especially underrepresented groups in the tech industry. Whether you’re a founder, student, or just someone who wants to level up their career, we want Galvanize to be a welcoming, inclusive place where you can take the next step in your journey.',
          street: '1644 Platte Street',
          city: 'Denver',
          state: 'CO',
          org_logo_url:"https://pbs.twimg.com/profile_images/595327206638755840/x9_fTdew.jpg",
          zip: '80202',
          contact: 'Community Events',
          email: 'fake@galvanize.com',
          phone_number: '303-749-0110',
          website: 'http://www.galvanize.com/'
        })
      ])
    })
}
