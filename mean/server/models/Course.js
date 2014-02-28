var mongoose = require('mongoose'),
    courseSchema, Course;

courseSchema = mongoose.Schema({
  title: {type: String, required: '{PATH} is required'},
  featured: {type: Boolean, required: '{PATH} is required'},
  published: {type: Date, required: '{PATH} is required'},
  tags: [String]
});

Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function (err, collection) {
    if (err) { return err; }
    if (collection.length === 0) {
      Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#', 'sociopaths']});
      Course.create({title: 'C# for Beginners', featured: true, published: new Date('10/6/2013'), tags: ['C#', 'beginner']});
      Course.create({title: 'C# for Experts', featured: false, published: new Date('15/5/2013'), tags: ['C#', 'expert']});
      Course.create({title: 'C# for You', featured: true, published: new Date('10/9/2013'), tags: ['C#', 'you']});
      Course.create({title: 'C# for Me', featured: false, published: new Date('12/5/2013'), tags: ['C#', 'test']});
    }
  });
}

exports.createDefaultCourses = createDefaultCourses;