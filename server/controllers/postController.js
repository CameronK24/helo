module.exports = {
    getPosts: async (req, res) => {
        const {userposts, search} = req.query;
        const {id} = req.params;
        // console.log(userposts);
        // console.log(search);
        const db = req.app.get('db');
        let posts = []
        const allPosts = await db.get_posts();
        // console.log(allPosts);
        if (userposts === 'true' && search !== '') {
            for (let x = 0; x < allPosts.length; x++) {
                if (allPosts[x].title.includes(search)) {
                    // console.log('asdf');
                    posts.push(allPosts[x]);
                }
            }
        }  
        else if (userposts === 'false' && search === '') {
            for (let x = 0; x < allPosts.length; x++) {
                if (+id !== allPosts[x].user_id) {
                    // console.log('basbab');
                    posts.push(allPosts[x]);
                }
            }
        }
        else if (userposts === 'false' && search !== '') {
            for (let x = 0; x < allPosts.length; x++) {
                if (+id !== allPosts[x].user_id && allPosts[x].title.includes(search)) {
                    // console.log('in here');
                    posts.push(allPosts[x]);
                }
            }
        }
        else if (userposts === 'true' && search === '') {
            // console.log('last boy');
            posts = allPosts;
        }
        console.log(posts);
        res.status(200).send(posts);
    },
    getSinglePost: async (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        const post = await db.get_single_post([id])
        res.status(200).send(post);
    }
}