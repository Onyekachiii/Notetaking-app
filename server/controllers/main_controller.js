// Get Homepage

exports.homepage = async (req, res)  => {
    const locals = {
        title: 'Note Taking App',
        description: 'Note Taking App by Node Js'
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

// Get about

exports.about = async (req, res)  => {
    const locals = {
        title: 'About - Note Taking App',
        description: 'Note Taking App by Node Js'
    }

    res.render('about', locals);
}