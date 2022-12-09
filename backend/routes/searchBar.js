const data2 = {
    columns: ['Name', 'Description', 'Accept Bid', 'Address'],
    rows: [
        ['Air Jordan', '....', 'Yes', '1200 W Pensacola Str, Tallahassee, FL, 32304'],
        ['Sonya Frost', '....', 'No', '1922 Mission Rd, Tallahassee, FL, 32304'],
        ['Jena Gaines', '....', 'Yes', 30, '2008/12/19', '$90,560'],
        ['Quinn Flynn', '....', 'No', 22, '2013/03/03', '$342,000'],
        ['Charde Marshall', '....', 'No', 36, '2008/10/16', '$470,600'],
        ['Haley Kennedy', '....', 'Yes', 43, '2012/12/18', '$313,500'],
        ['Tatyana Fitzpatrick', '....', 'Yes', 19, '2010/03/17', '$385,750'],
        ['Michael Silva', '....', 'Yes', 66, '2012/11/27', '$198,500'],
        ['Paul Byrd', '....', 'No', 64, '2010/06/09', '$725,000'],
        ['Gloria Little', '....', 'No', 59, '2009/04/10', '$237,500'],
    ],
};

const instance = new mdb.Datatable(document.getElementById('datatable'), data2)

document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    instance.input-group(e.target.value);
});