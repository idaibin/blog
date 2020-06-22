function MyPromise(executor) {
    let self = this;

    // 初始化state为等待状态
    self.state = 'pending';

    // 成功的值
    self.value = undefined;

    // 失败的原因
    self.reason = undefined;

    // 存放fn1的回调
    self.onResolved = [];

    // 存放fn2的回调
    self.onRejected = [];

    // 成功
    function resolve(value) {
        // state改变,resolve调用就会失败
        if (self.state === 'pending') {
            // resolve调用后，state状态变更为成功
            self.state = 'fulfilled';
            // 存储成功的值
            self.value = value;
        }
    }

    // 失败
    function reject(reason) {
        // state改变，reject调用就会失败
        if (self.state === 'pending') {
            // reject调用后，state状态变更为失败
            self.state = 'rejected';
            // 存储失败的原因
            self.reason = reason;
        }
    }

    // 如果executor执行报错，直接执行reject
    try {
        // 立即执行
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

MyPromise.prototype.then = function (onfulfilled, onrejected) {
    let self = this;
    if (self.state === 'fulfilled') {
        onfulfilled(self.value);
    }
    if (self.state === 'rejected') {
        onrejected(self.reason);
    }
};
