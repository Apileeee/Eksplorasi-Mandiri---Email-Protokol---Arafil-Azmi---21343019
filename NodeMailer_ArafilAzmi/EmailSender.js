const nodemailer = require('nodemailer');

const setupTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rafiazmi0812@gmail.com',
            pass: 'jqvklubbnbnelxsb'
        }
    });
};

const sendEmail = (mailOptions) => {
    const transporter = setupTransporter();

    return transporter.sendMail(mailOptions);
};

const email = (req, res) => {
    const mailOptions = {
        from: 'Arafil Azmi',
        to: 'tsany2002@gmail.com',
        subject: 'Mengirimkan File dan Text',
        html: '<h1> Halo Teman</h1>',
        text: 'Ini adalah file yang kamu minta !',
        attachments: [
            {
                filename: 'PesanDariAku.txt',
                content: 'Selamat Ulang Tahun!'
            }
        ]
    };

    sendEmail(mailOptions)
        .then(() => {
            return res.status(201).json({
                msg: "Pesan Anda Sudah Terkirim !"
            });
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json({ error: "Gagal mengirim email." });
        });
};

module.exports = {
    email
};
