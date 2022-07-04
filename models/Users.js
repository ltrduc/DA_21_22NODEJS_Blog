const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Users = new Schema(
    {
        googleId: String,
        username: { type: String, require: true, indexes: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        dob: Date,
        phone: { type: String },
        avatar: { type: String },
        user_bio: { type: String },
        personal_concept: { type: String },
        main_color: { type: String },
        blog_counter: { type: Number },
        location: { type: String, default: '' },
        job: { type: String, default: '' },
        relationship_status: { type: String, default: '' },
        favorite: { type: String, default: '' },
        social_link: { type: String, default: '' },
        slug: { type: String, slug: 'email', sparse: true, unique: true }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Users', Users);