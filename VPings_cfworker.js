const countries = [
  {'id': 1, 'name': 'United States of America', 'code': 'US'},
{'id': 2, 'name': 'China', 'code': 'CN'},
{'id': 3, 'name': 'Australia', 'code': 'AU'},
{'id': 4, 'name': 'Japan', 'code': 'JP'},
{'id': 5, 'name': 'Thailand', 'code': 'TH'},
{'id': 6, 'name': 'India', 'code': 'IN'},
{'id': 7, 'name': 'Singapore', 'code': 'SG'},
{'id': 8, 'name': 'Malaysia', 'code': 'MY'},
{'id': 9, 'name': 'Korea (the Republic of)', 'code': 'KR'},
{'id': 10, 'name': '-', 'code': '-'},
{'id': 11, 'name': 'Hong Kong', 'code': 'HK'},
{'id': 12, 'name': 'Taiwan (Province of China)', 'code': 'TW'},
{'id': 13, 'name': 'Cambodia', 'code': 'KH'},
{'id': 14, 'name': 'Philippines', 'code': 'PH'},
{'id': 15, 'name': 'Viet Nam', 'code': 'VN'},
{'id': 16, 'name': 'Brazil', 'code': 'BR'},
{'id': 17, 'name': 'Argentina', 'code': 'AR'},
{'id': 18, 'name': 'Palestine, State of', 'code': 'PS'},
{'id': 19, 'name': 'Spain', 'code': 'ES'},
{'id': 20, 'name': 'France', 'code': 'FR'},
{'id': 21,
 'name': 'United Kingdom of Great Britain and Northern Ireland',
 'code': 'GB'},
{'id': 22, 'name': 'Germany', 'code': 'DE'},
{'id': 23, 'name': 'Czechia', 'code': 'CZ'},
{'id': 24, 'name': 'Italy', 'code': 'IT'},
{'id': 25, 'name': 'Switzerland', 'code': 'CH'},
{'id': 26, 'name': 'South Africa', 'code': 'ZA'},
{'id': 27, 'name': 'Austria', 'code': 'AT'},
{'id': 28, 'name': 'Netherlands (Kingdom of the)', 'code': 'NL'},
{'id': 29, 'name': 'Greece', 'code': 'GR'},
{'id': 30, 'name': 'Russian Federation', 'code': 'RU'},
{'id': 31, 'name': 'Sweden', 'code': 'SE'},
{'id': 32, 'name': 'United Arab Emirates', 'code': 'AE'},
{'id': 33, 'name': 'Belgium', 'code': 'BE'},
{'id': 34, 'name': 'Denmark', 'code': 'DK'},
{'id': 35, 'name': 'Portugal', 'code': 'PT'},
{'id': 36, 'name': 'Ghana', 'code': 'GH'},
{'id': 37, 'name': 'Cameroon', 'code': 'CM'},
{'id': 38, 'name': 'Turkiye', 'code': 'TR'},
{'id': 39, 'name': 'Finland', 'code': 'FI'},
{'id': 40, 'name': 'Poland', 'code': 'PL'},
{'id': 41, 'name': 'Jordan', 'code': 'JO'},
{'id': 42, 'name': 'Romania', 'code': 'RO'},
{'id': 43, 'name': 'Kenya', 'code': 'KE'},
{'id': 44, 'name': 'Ireland', 'code': 'IE'},
{'id': 45, 'name': 'Uganda', 'code': 'UG'},
{'id': 46, 'name': 'Armenia', 'code': 'AM'},
{'id': 47, 'name': 'Tanzania, the United Republic of', 'code': 'TZ'},
{'id': 48, 'name': 'Burundi', 'code': 'BI'},
{'id': 49, 'name': 'Norway', 'code': 'NO'},
{'id': 50, 'name': 'Luxembourg', 'code': 'LU'},
{'id': 51, 'name': 'Colombia', 'code': 'CO'},
{'id': 52, 'name': 'Bulgaria', 'code': 'BG'},
{'id': 53, 'name': 'Chile', 'code': 'CL'},
{'id': 54, 'name': 'Ukraine', 'code': 'UA'},
{'id': 55, 'name': 'Canada', 'code': 'CA'},
{'id': 56, 'name': 'Egypt', 'code': 'EG'},
{'id': 57, 'name': 'Israel', 'code': 'IL'},
{'id': 58, 'name': 'Qatar', 'code': 'QA'},
{'id': 59, 'name': 'Moldova (the Republic of)', 'code': 'MD'},
{'id': 60, 'name': 'Seychelles', 'code': 'SC'},
{'id': 61, 'name': 'Iraq', 'code': 'IQ'},
{'id': 62, 'name': 'Holy See', 'code': 'VA'},
{'id': 63, 'name': 'Latvia', 'code': 'LV'},
{'id': 64, 'name': 'Estonia', 'code': 'EE'},
{'id': 65, 'name': 'Iceland', 'code': 'IS'},
{'id': 66, 'name': 'Iran (Islamic Republic of)', 'code': 'IR'},
{'id': 67, 'name': 'Georgia', 'code': 'GE'},
{'id': 68, 'name': 'Slovakia', 'code': 'SK'},
{'id': 69, 'name': 'Kazakhstan', 'code': 'KZ'},
{'id': 70, 'name': 'New Zealand', 'code': 'NZ'},
{'id': 71, 'name': 'Croatia', 'code': 'HR'},
{'id': 72, 'name': 'Mexico', 'code': 'MX'},
{'id': 73, 'name': 'Bahrain', 'code': 'BH'},
{'id': 74, 'name': 'Hungary', 'code': 'HU'},
{'id': 75, 'name': 'Saudi Arabia', 'code': 'SA'},
{'id': 76, 'name': 'Malta', 'code': 'MT'},
{'id': 77, 'name': 'Cyprus', 'code': 'CY'},
{'id': 78, 'name': 'Indonesia', 'code': 'ID'},
{'id': 79, 'name': 'Syrian Arab Republic', 'code': 'SY'},
{'id': 80, 'name': 'Lebanon', 'code': 'LB'},
{'id': 81, 'name': 'Aland Islands', 'code': 'AX'},
{'id': 82, 'name': 'Zambia', 'code': 'ZM'},
{'id': 83, 'name': 'Lithuania', 'code': 'LT'},
{'id': 84, 'name': 'Oman', 'code': 'OM'},
{'id': 85, 'name': 'Serbia', 'code': 'RS'},
{'id': 86, 'name': 'Slovenia', 'code': 'SI'},
{'id': 87, 'name': 'North Macedonia', 'code': 'MK'},
{'id': 88, 'name': 'Liechtenstein', 'code': 'LI'},
{'id': 89, 'name': 'Jersey', 'code': 'JE'},
{'id': 90, 'name': 'Bosnia and Herzegovina', 'code': 'BA'},
{'id': 91, 'name': 'Azerbaijan', 'code': 'AZ'},
{'id': 92, 'name': 'Peru', 'code': 'PE'},
{'id': 93, 'name': 'Kyrgyzstan', 'code': 'KG'},
{'id': 94, 'name': 'Isle of Man', 'code': 'IM'},
{'id': 95, 'name': 'Guernsey', 'code': 'GG'},
{'id': 96, 'name': 'Gibraltar', 'code': 'GI'},
{'id': 97, 'name': 'Libya', 'code': 'LY'},
{'id': 98, 'name': 'Panama', 'code': 'PA'},
{'id': 99, 'name': 'Yemen', 'code': 'YE'},
{'id': 100, 'name': 'Belarus', 'code': 'BY'},
{'id': 101, 'name': 'Uzbekistan', 'code': 'UZ'},
{'id': 102, 'name': 'Mayotte', 'code': 'YT'},
{'id': 103, 'name': 'Martinique', 'code': 'MQ'},
{'id': 104, 'name': 'Guadeloupe', 'code': 'GP'},
{'id': 105, 'name': 'Saint Martin (French part)', 'code': 'MF'},
{'id': 106, 'name': 'French Guiana', 'code': 'GF'},
{'id': 107, 'name': 'Sri Lanka', 'code': 'LK'},
{'id': 108, 'name': 'Eswatini', 'code': 'SZ'},
{'id': 109, 'name': 'Congo (the Democratic Republic of the)', 'code': 'CD'},
{'id': 110, 'name': 'Kuwait', 'code': 'KW'},
{'id': 111, 'name': 'Bangladesh', 'code': 'BD'},
{'id': 112, 'name': 'Bhutan', 'code': 'BT'},
{'id': 113, 'name': 'Brunei Darussalam', 'code': 'BN'},
{'id': 114, 'name': 'Saint Pierre and Miquelon', 'code': 'PM'},
{'id': 115, 'name': "Lao People's Democratic Republic", 'code': 'LA'},
{'id': 116, 'name': 'Guam', 'code': 'GU'},
{'id': 117, 'name': 'Northern Mariana Islands', 'code': 'MP'},
{'id': 118, 'name': 'Dominican Republic', 'code': 'DO'},
{'id': 119, 'name': 'Nigeria', 'code': 'NG'},
{'id': 120, 'name': 'Ecuador', 'code': 'EC'},
{'id': 121, 'name': 'Venezuela (Bolivarian Republic of)', 'code': 'VE'},
{'id': 122, 'name': 'Costa Rica', 'code': 'CR'},
{'id': 123, 'name': 'Puerto Rico', 'code': 'PR'},
{'id': 124, 'name': 'Bolivia (Plurinational State of)', 'code': 'BO'},
{'id': 125, 'name': 'Virgin Islands (U.S.)', 'code': 'VI'},
{'id': 126, 'name': 'Maldives', 'code': 'MV'},
{'id': 127, 'name': 'Mongolia', 'code': 'MN'},
{'id': 128, 'name': 'Norfolk Island', 'code': 'NF'},
{'id': 129, 'name': 'Christmas Island', 'code': 'CX'},
{'id': 130, 'name': 'Cocos (Keeling) Islands', 'code': 'CC'},
{'id': 131, 'name': 'Pakistan', 'code': 'PK'},
{'id': 132, 'name': 'Papua New Guinea', 'code': 'PG'},
{'id': 133, 'name': 'Timor-Leste', 'code': 'TL'},
{'id': 134, 'name': 'Solomon Islands', 'code': 'SB'},
{'id': 135, 'name': 'Vanuatu', 'code': 'VU'},
{'id': 136, 'name': 'Fiji', 'code': 'FJ'},
{'id': 137, 'name': 'Cook Islands', 'code': 'CK'},
{'id': 138, 'name': 'Tonga', 'code': 'TO'},
{'id': 139, 'name': 'Nepal', 'code': 'NP'},
{'id': 140, 'name': 'Macao', 'code': 'MO'},
{'id': 141, 'name': 'Nicaragua', 'code': 'NI'},
{'id': 142, 'name': 'Jamaica', 'code': 'JM'},
{'id': 143, 'name': 'Albania', 'code': 'AL'},
{'id': 144, 'name': 'Trinidad and Tobago', 'code': 'TT'},
{'id': 145, 'name': 'South Sudan', 'code': 'SS'},
{'id': 146, 'name': 'Afghanistan', 'code': 'AF'},
{'id': 147, 'name': 'Grenada', 'code': 'GD'},
{'id': 148, 'name': 'Virgin Islands (British)', 'code': 'VG'},
{'id': 149, 'name': 'Saint Kitts and Nevis', 'code': 'KN'},
{'id': 150, 'name': 'Antigua and Barbuda', 'code': 'AG'},
{'id': 151, 'name': 'Saint Barthelemy', 'code': 'BL'},
{'id': 152, 'name': 'Saint Vincent and The Grenadines', 'code': 'VC'},
{'id': 153, 'name': 'Bahamas', 'code': 'BS'},
{'id': 154, 'name': 'Dominica', 'code': 'DM'},
{'id': 155, 'name': 'Cayman Islands', 'code': 'KY'},
{'id': 156, 'name': 'Myanmar', 'code': 'MM'},
{'id': 157, 'name': 'Uruguay', 'code': 'UY'},
{'id': 158, 'name': 'Morocco', 'code': 'MA'},
{'id': 159, 'name': 'Montenegro', 'code': 'ME'},
{'id': 160, 'name': 'Andorra', 'code': 'AD'},
{'id': 161, 'name': 'Barbados', 'code': 'BB'},
{'id': 162, 'name': 'Saint Lucia', 'code': 'LC'},
{'id': 163, 'name': 'Paraguay', 'code': 'PY'},
{'id': 164, 'name': 'Guatemala', 'code': 'GT'},
{'id': 165, 'name': 'United States Minor Outlying Islands', 'code': 'UM'},
{'id': 166, 'name': 'Tokelau', 'code': 'TK'},
{'id': 167, 'name': 'New Caledonia', 'code': 'NC'},
{'id': 168, 'name': 'Wallis and Futuna', 'code': 'WF'},
{'id': 169, 'name': 'Zimbabwe', 'code': 'ZW'},
{'id': 170, 'name': 'Antarctica', 'code': 'AQ'},
{'id': 171, 'name': 'San Marino', 'code': 'SM'},
{'id': 172, 'name': 'Honduras', 'code': 'HN'},
{'id': 173, 'name': 'Belize', 'code': 'BZ'},
{'id': 174, 'name': 'El Salvador', 'code': 'SV'},
{'id': 175, 'name': 'Monaco', 'code': 'MC'},
{'id': 176, 'name': 'Greenland', 'code': 'GL'},
{'id': 177, 'name': 'Tajikistan', 'code': 'TJ'},
{'id': 178, 'name': 'Faroe Islands', 'code': 'FO'},
{'id': 179, 'name': 'Botswana', 'code': 'BW'},
{'id': 180, 'name': 'Mali', 'code': 'ML'},
{'id': 181, 'name': 'Mozambique', 'code': 'MZ'},
{'id': 182, 'name': 'Liberia', 'code': 'LR'},
{'id': 183, 'name': 'Mauritius', 'code': 'MU'},
{'id': 184, 'name': 'Tunisia', 'code': 'TN'},
{'id': 185, 'name': 'Madagascar', 'code': 'MG'},
{'id': 186, 'name': 'Angola', 'code': 'AO'},
{'id': 187, 'name': 'Namibia', 'code': 'NA'},
{'id': 188, 'name': "Cote D'ivoire", 'code': 'CI'},
{'id': 189, 'name': 'Sudan', 'code': 'SD'},
{'id': 190, 'name': 'Malawi', 'code': 'MW'},
{'id': 191, 'name': 'Benin', 'code': 'BJ'},
{'id': 192, 'name': 'Cabo Verde', 'code': 'CV'},
{'id': 193, 'name': 'Rwanda', 'code': 'RW'},
{'id': 194, 'name': 'Congo', 'code': 'CG'},
{'id': 195, 'name': 'Gambia', 'code': 'GM'},
{'id': 196, 'name': 'Lesotho', 'code': 'LS'},
{'id': 197, 'name': 'Guinea', 'code': 'GN'},
{'id': 198, 'name': 'Burkina Faso', 'code': 'BF'},
{'id': 199, 'name': 'Somalia', 'code': 'SO'},
{'id': 200, 'name': 'Sierra Leone', 'code': 'SL'},
{'id': 201, 'name': 'Niger', 'code': 'NE'},
{'id': 202, 'name': 'Central African Republic', 'code': 'CF'},
{'id': 203, 'name': 'Togo', 'code': 'TG'},
{'id': 204, 'name': 'Gabon', 'code': 'GA'},
{'id': 205, 'name': 'Equatorial Guinea', 'code': 'GQ'},
{'id': 206, 'name': 'Senegal', 'code': 'SN'},
{'id': 207, 'name': 'Algeria', 'code': 'DZ'},
{'id': 208, 'name': 'American Samoa', 'code': 'AS'},
{'id': 209, 'name': 'Mauritania', 'code': 'MR'},
{'id': 210, 'name': 'Djibouti', 'code': 'DJ'},
{'id': 211, 'name': 'Comoros', 'code': 'KM'},
{'id': 212, 'name': 'British Indian Ocean Territory', 'code': 'IO'},
{'id': 213, 'name': 'Reunion', 'code': 'RE'},
{'id': 214, 'name': 'Chad', 'code': 'TD'},
{'id': 215, 'name': 'Nauru', 'code': 'NR'},
{'id': 216, 'name': 'Samoa', 'code': 'WS'},
{'id': 217, 'name': 'Micronesia (Federated States of)', 'code': 'FM'},
{'id': 218, 'name': 'French Polynesia', 'code': 'PF'},
{'id': 219, 'name': 'Palau', 'code': 'PW'},
{'id': 220, 'name': 'Haiti', 'code': 'HT'},
{'id': 221, 'name': 'Turks and Caicos Islands', 'code': 'TC'},
{'id': 222, 'name': 'Bermuda', 'code': 'BM'},
{'id': 223, 'name': 'Suriname', 'code': 'SR'},
{'id': 224, 'name': 'Curacao', 'code': 'CW'},
{'id': 225, 'name': 'Niue', 'code': 'NU'},
{'id': 226, 'name': 'Tuvalu', 'code': 'TV'},
{'id': 227, 'name': 'Marshall Islands', 'code': 'MH'},
{'id': 228, 'name': 'Kiribati', 'code': 'KI'},
{'id': 229,
 'name': "Korea (the Democratic People's Republic of)",
 'code': 'KP'},
{'id': 230, 'name': 'Aruba', 'code': 'AW'},
{'id': 231, 'name': 'Cuba', 'code': 'CU'},
{'id': 232, 'name': 'Guyana', 'code': 'GY'},
{'id': 233, 'name': 'Sao Tome and Principe', 'code': 'ST'},
{'id': 234, 'name': 'Ethiopia', 'code': 'ET'},
{'id': 235, 'name': 'Eritrea', 'code': 'ER'},
{'id': 236, 'name': 'Guinea-Bissau', 'code': 'GW'},
{'id': 237, 'name': 'Turkmenistan', 'code': 'TM'},
{'id': 238, 'name': 'Falkland Islands [Malvinas]', 'code': 'FK'},
{'id': 239, 'name': 'Anguilla', 'code': 'AI'},
{'id': 240, 'name': 'Sint Maarten (Dutch part)', 'code': 'SX'},
{'id': 241, 'name': 'Bouvet Island', 'code': 'BV'},
{'id': 242, 'name': 'Montserrat', 'code': 'MS'},
{'id': 243, 'name': 'Bonaire, Sint Eustatius and Saba', 'code': 'BQ'},
{'id': 244, 'name': 'Pitcairn', 'code': 'PN'}
];

addEventListener('fetch', event => {
event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const json = {
    "code": 0,
    "message": "success",
    "result": countries.map(country => ({
      "id": country.id,
      "name": country.name,
      "tag": country.code,
      "last_active": 1712226601,
      "ipv4": "1.1.1.1",
      "ipv6": "",
      "valid_ip": "1.1.1.1",
      "host": {
        "Platform": "debian",
        "PlatformVersion": "12.5",
        "CPU": ["KKO.IM"],
        "MemTotal": 1000000000,
        "DiskTotal": 100000000000,
        "SwapTotal": 0,
        "Arch": "x86_64",
        "Virtualization": "hyperv",
        "BootTime": 1686031483,
        "CountryCode": country.code,
        "Version": "0.16.3"
      },
      "status": {
        "CPU": 100.0,
        "MemUsed": 1000000000,
        "SwapUsed": 0,
        "DiskUsed": 100000000000,
        "NetInTransfer": 0,
        "NetOutTransfer": 1024000000000,
        "NetInSpeed": 10000,
        "NetOutSpeed": 10000,
        "Uptime": 1,
        "Load1": 0.1,
        "Load5": 0.1,
        "Load15": 0.1,
        "TcpConnCount": 0,
        "UdpConnCount": 0,
        "ProcessCount": 0
      }
    }))
  };

return new Response(JSON.stringify(json), {
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});
}
