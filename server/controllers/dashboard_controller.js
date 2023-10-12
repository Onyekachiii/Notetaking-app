// Get Dashboard

exports.dashboard = async (req, res)  => {
    const locals = {
        title: 'Dashboard',
        description: 'Note Taking App by Node Js'
    }

    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    });
}