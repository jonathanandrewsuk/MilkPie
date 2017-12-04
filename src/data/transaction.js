'use strict';

function generateTransaction(postId, postTitle) {

    const transaction = {
        userId: 2,
        postId: `${postId}`,
        postTitle: `${postTitle}`,
        status: 1, // 1 for approved transactions
        paymentMethod: `Free`,
        payableAmt: 0,
        paymentDate: `${new Date().toISOString()}`,
        paypalTransectionId: ``,
        userName: `admin`,
        payEmail: `nmarcellin2@gmail.com`,
        billingName: `admin`,
        billingAdd: ``,
        packageId: 34,
        packageType: null,
        payforpackage: 1,
        payforfeaturedH: 0,
        payforfeaturedC: 0,
        payforcategory: 0
    }

    return { transaction };
}

module.exports = generateTransaction
module.exports.generateTransaction = generateTransaction
