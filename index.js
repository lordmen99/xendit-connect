const unirest = require('unirest');

exports.getBalance = (secretKey, type = null) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    let url = '';
    if (type === null) {
      url = 'https://api.xendit.co/balance';
    } else {
      url = `https://api.xendit.co/balance?account_type=${type.toUpperCase()}`;
    }

    unirest
      .get(url)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.nameValidator = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/bank_account_data_requests')
      .headers({ Authorization: `Basic ${base64}` })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.getListBankVA = (secretKey) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get('https://api.xendit.co/available_virtual_account_banks')
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.createVirtualAccount = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/callback_virtual_accounts')
      .headers({ Authorization: `Basic ${base64}` })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.updateVirtualAccount = (secretKey, virtualAccountId, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .patch(`https://api.xendit.co/callback_virtual_accounts/${virtualAccountId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.viewDetailVirtualAccountPayment = (secretKey, paymentId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get(`https://api.xendit.co/callback_virtual_account_payments/payment_id=${paymentId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.viewDetailVirtualAccount = (secretKey, virtualAccountId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get(`https://api.xendit.co/callback_virtual_accounts/${virtualAccountId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.createRetailOutlet = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/fixed_payment_code')
      .headers({ Authorization: `Basic ${base64}` })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.updateRetailOutlet = (secretKey, paymentCodeId, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .patch(`https://api.xendit.co/fixed_payment_code/${paymentCodeId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.viewDetailRetailOutlet = (secretKey, paymentCodeId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get(`https://api.xendit.co/fixed_payment_code/${paymentCodeId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.createInvoice = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/v2/invoices')
      .headers({ Authorization: `Basic ${base64}` })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.viewDetailInvoice = (secretKey, invoiceId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get(`https://api.xendit.co/v2/invoices/${invoiceId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.makeInvoiceExpire = (secretKey, invoiceId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post(`https://api.xendit.co/invoices/${invoiceId}/expire!`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.createDisbursement = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/disbursements')
      .headers({ Authorization: `Basic ${base64}`, 'X-IDEMPOTENCY-KEY': new Date().getTime() / 1000 })
      .send(json)
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.getDisbursementById = (secretKey, disbursementId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get(`https://api.xendit.co/disbursements/${disbursementId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.getDisbursementByExternaId = (secretKey, externalId) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get(`https://api.xendit.co/disbursements?external_id=${externalId}`)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.getListDisbursementBank = (secretKey) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get('https://api.xendit.co/available_disbursements_banks')
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};
