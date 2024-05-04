const mongoose = require('mongoose');
const Actor = require('./models/Actor'); // Import the Actor model
const Movie = require('./models/Movie'); // Import the Movie model

// Function to create mock data
async function createMockData() {
  try {
    // Connect to the database
    await mongoose.connect(process.env.TEST_MONGO_URI);
    console.log('Connected to the database successfully.');

    // Wipe all existing data from the Actor and Movie collections
    await Actor.deleteMany({});
    await Movie.deleteMany({});
    console.log('All existing actors and movies have been deleted from the database.');

    // Create individual actors
    const actorData = [
      { name: 'Lila', pfp: 't4zucjdozfyuymbn9mfj' },
      { name: 'Jack Owen', pfp: 'bjfqjw1cohhnf8nqjoox' },
      { name: 'Riley Blake', pfp: 'xqofp4u1zdkomei9kcwp' },
      { name: 'Max', pfp: 'ejaw6gqobsbbhevkaf8y' },
      { name: 'Christopher Hale', pfp: 'pk8ooxk6qdymtdt00lpn' },
      { name: 'Mia', pfp: 'hedb2nsmmit4ny3kh0dx' },
      { name: 'Drew Warden', pfp: 'h53xndg43peftlvgjqo7' },
      { name: 'Nate Wallace', pfp: 'tmphmhobwgem0t67gebc' },
      { name: 'Jake Reed', pfp: 'c9m4qvnordfigeizq8kx' },
      { name: 'Chloe', pfp: 'tzofdsmk6eqqn8ogwzhv' },
      { name: 'Sam Thornton', pfp: 'ytuio4qr3lqr6rr92dzq' },
      { name: 'Brett Malone', pfp: 'zg0ncrskz5qtktsnf0gp' },
      { name: 'Owen Gray', pfp: 'b4zg8pab8l8lqlyorcw4' },
      { name: 'Samantha Turner', pfp: 'jdy4ppp2vgurjewxmwnt' },
      { name: 'Ethan Keller', pfp: 'td2u3tkn3pe1f7z9wbxc' },
    ];

    // Save actors to the database
    const actors = await Actor.insertMany(actorData);
    console.log('Mock actors created successfully.');

    // Create individual movies
    const movies = [
        {
            title: 'Snizzlewump Odyssey',
            synopsis: 'Embark on a cosmic journey through the whimsical universe of Snizzlewumps, as an astronaut ventures beyond the stars to unravel the mysteries of space and beyond.',
            plot: 'Join Captain Wumpington on a space odyssey like no other as he navigates the fantastical galaxy filled with Snizzlewumps and enchanting phenomena. Armed with curiosity and wonder, he traverses through surreal nebulae, encountering eccentric cosmic beings and enigmatic forces that lead to an extraordinary discovery about the secrets of the universe.',
            actors: [
                { actor: actors[0]._id, role: 'Captain Wumpington' },
                { actor: actors[1]._id, role: 'Snizzle AI' },
                { actor: actors[2]._id, role: 'Nebula Explorer' },
                { actor: actors[3]._id, role: 'Galaxy Navigator' }
            ],
            releaseDate: new Date('2023-07-12T00:00:00.000Z'),
            rating: 4.6,
            reviews: 302,
            landscapeImage: 'odb4mazlaa6gulizdszk',
            portraitImage: 'zrlvzwb76zjhex7xauz0',
        },
        {
          title: 'The Dark Snizzlewump Rises',
          synopsis: 'A hero must face the sinister Snizzlewump lurking in the shadows, threatening the whimsical realm with its dark schemes.',
          plot: 'In this Snizzlewump-inspired adventure, the hero, Wump Knight, must confront the cunning and malevolent Snizzlewump as it plots to cast a shadow over the vibrant realm. With the aid of quirky companions and mystic Snizzle gadgets, Wump Knight battles through treacherous landscapes and snizzlemances his way to save the day.',
          actors: [
              { actor: actors[4]._id, role: 'Wump Knight' },
              { actor: actors[5]._id, role: 'Dark Snizzlewump' },
              { actor: actors[6]._id, role: 'Snizzle Guide' },
              { actor: actors[7]._id, role: 'Mysterious Ally' }
          ],
          releaseDate: new Date('2024-01-10T00:00:00.000Z'),
          rating: 8,
          reviews: 277,
          landscapeImage: 'qkmrnheqor3alrwatu03',
          portraitImage: 'qhfpywwfodeugkmtwokq',
        },
        {
            title: 'Snizzlewump Park',
            synopsis: 'Welcome to Snizzlewump Park, where the enchanting world of Snizzlewumps comes to life in a magical and interactive theme park.',
            plot: `Step into the fantastical Snizzlewump Park, where playful Snizzlewumps roam free and mystical attractions await. Guests can enjoy wondrous rides, mesmerizing performances, and captivating exhibits, all centered around the Snizzlewump legacy. But when a Snizzlewump mischief occurs, park rangers must embark on a wild adventure to restore harmony and ensure the guests' safety.`,
            actors: [
                { actor: actors[8]._id, role: 'Snizzle Ranger' },
                { actor: actors[9]._id, role: 'Snizzle Storyteller' },
                { actor: actors[10]._id, role: 'Magic Engineer' },
                { actor: actors[11]._id, role: 'Adventurous Visitor' }
            ],
            releaseDate: new Date('2023-08-05T00:00:00.000Z'),
            rating: 9.4,
            reviews: 152,
            landscapeImage: 't56wm9lov5vwtmreul99',
            portraitImage: 'p77kwzghbexbzseapixv',
        },
      ];      

    // Save movies to the database
    await Movie.insertMany(movies);
    console.log('Mock movies created successfully.');
  } catch (error) {
    console.error('Error creating mock data:', error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }
}

// Export the createMockData function
module.exports = createMockData;