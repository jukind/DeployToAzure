
const winnerlist = function(req, res){
    res.render('major',{
        winners:
        [
            {year:'2013', team:'Fnatic'},
            {year:'2014', team:'VP'},
            {year:'2014', team:'NIP'},
            {year:'2014', team:'LDLC'},
            {year:'2015', team:'Fnatic'},
            {year:'2015', team:'Fnatic'},
            {year:'2015', team:'Envy'},
            {year:'2016', team:'LG'},
            {year:'2016', team:'SK'},
            {year:'2017', team:'Astralis'},
            {year:'2017', team:'Gambit'},
            {year:'2018', team:'C9'},
            {year:'2018', team:'Astralis'}
        ]});
};
module.exports = {
    winnerlist
};