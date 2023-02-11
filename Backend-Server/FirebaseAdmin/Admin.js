import admin from "firebase-admin"

let serviceAccount = {
    "type": "service_account",
    "project_id": "mern-stack-finalhack",
    "private_key_id": "322fabd68528e8126e3a464e6df9a1f05835dc31",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxjH1X4/kbrgk0\nIg7+ljT77+JUmWCpq/+QPWxqGYzofRSK6SsVPJiegvTywryrnRFuRNgOwIszonCm\nrL8LFeIyvSoqbT3Y+vEFqDuV3A10s0IABpZQQw132lEszFHKuvYwZtwqRdSoRpzt\nOA4FBih3wy6jYpPT6bhR46KSMD7Aw30u+c54mIdhkVkQFpBJWWdLZsckH+OZYSoL\nsvpk8jLKgpx48HxQt0dyy29vs0pVVtakpokMlndsXahd0U2dyOuBi/sFPTdrqjbF\nAwpsnctgLAhomqp4qg5Gdo2Mrh7VHY8GFbpv5hwLYS7TY2+8qUG+GOyIt1ocd9bb\nosX+2w/rAgMBAAECggEAM+pLgFaVsYVLBaZr0f9j0MMM4AXVIOe9G5UKTV/ZNuXU\nCuYxBc2pJrhOHWnZtyh/P0n8Dxw318pIvEPIvNoSQRnU6YD106tUrH3Lpn8opBYC\nV3WVoDRrDL+Wes3noKrYb8Cz4dx3WRkEq8x3NPre/F3jFj0t0ooFrlQsZiibQMur\nCmCRrqlFJ3sB1CuA89veDJWACWz5K1T+J0vTLrVItseBUSHbzPWlLjXRfPm4FDv+\nxoP8Oamo/0y0YvPCgVa2sbWZzGZ2htGcQvoKZhUajio6EjP9Fy7q94iryaW1fgUH\nXqT4dYmDyjZs/mx8Kx1Q6VNitoNs9kzidl4qHhHoeQKBgQDwfTjemBsXd5lMT3Cu\naxrUKnbR5yhm1f2O2ztotjuZlT4+0jdSMccQWIqwA23kr035SzrTI84FsLksIf8E\nYuNFpS/VqbfkFWsqFzxE+Un3kgo+ekKbh40pJ4mlyFaXW5JDHG0+W6tVAY+aWXva\nmHQ9JkL/AHNe/1NKQwN6/pg/fQKBgQC9AAsGkicqrVtNuo1Ch5K5ixg2w/Jc5dOd\nlxCoX1c8WSjzo3Ku1RVaAwIVl3wkT1i5nswxfEg3DA4GtIFgm21E0JYvMJTL29XR\nqfcPMOLT6JKQHt0EcHb//kRuAhFMdT+4EnqbtN9zUhahWznMv0ytMH/NJrc5K6BF\nUnchDOX5hwKBgFmRuhGlw0ldQRpb6BL+TzLAUhrhpnmOr+56FslsPgx4uoM5VmNl\nqMecwqLF1DM9W6RC8bjb+ArEhGM8kje3AQDaglNo79WiaJR3rPnfgz4TBX+5l39H\n4Dp4wFqfoCilcXdPahy0lb6GY07Qj0GeUITJ8F/7cfzqycG57dzsYBYdAoGBAIuB\nGqJRAuP3batkBZyT4XNe/hJ+c8iqQ5bQyJTfOs7qqNWdUatG0SnNip5RYGqUvtLU\nKbhlGhC3ryq31b9vOipPJGvUmiAXNi46HIhz9xmfU39ZqJ38PXobPntMv2QGL3A5\nA5Mm4MCIWPflFDbTBU/Yupy89QUX9Ib2pcQZdy7FAoGBAO4Nw1QgDQXFoXCa9DNf\nygZ6rSsPP3mgwtDpKksBcb9p1Jw7n3BcMjWGYFriGRnC/5Q9yPEWYtm3Z0IPYVDG\n0PUq93R7wz3ToAtk9now4A/WuGfxZGEpDYfmU8fOcyRKSVp3aOOBytPDQuD7xNXG\no4AuY295nw6KHMQKlhL8i+E3\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-wyapl@mern-stack-finalhack.iam.gserviceaccount.com",
    "client_id": "100015742279934985460",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wyapl%40mern-stack-finalhack.iam.gserviceaccount.com"
};
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "gs://mern-stack-finalhack.appspot.com"
});
const Bucket = admin.storage().bucket("gs://mern-stack-finalhack.appspot.com");


export default Bucket