class EventBus {
    constructor() {
        // 初始化列表
        this.eventObject = {}
        // 回调函数列表的ID
        this.callbackID = 0
    }

    publish(eventName, ...args) {
        const eventObjectList = this.eventObject[eventName]
        if (!eventObjectList) console.warn('No Event');
        for (let id in eventObjectList) {
            eventObjectList[id](...args)
        }
    }

    subscribe(eventName, callback) {
        if (!this.eventObject[eventName]) this.eventObject[eventName] = {}
        const id = this.callbackID++
        this.eventObject[eventName][id] = callback
        const unSubscribe = () => {
            delete this.eventObject[eventName][id]
            if (Object.keys(this.eventObject[eventName]).length === 0) delete this.eventObject[eventName]
        }
        return {
            unSubscribe
        }
    }
}

const eventbus = new EventBus()
// 订阅事件eventX
eventbus.subscribe("eventX", (obj, num) => {
    console.log("模块A", obj, num);
});
eventbus.subscribe("eventX", (obj, num) => {
    console.log("模块B", obj, num);
});
const subscriberC = eventbus.subscribe("eventX", (obj, num) => {
    console.log("模块C", obj, num);
});

// 发布事件eventX
eventbus.publish("eventX", { msg: "EventX published!" }, 1);

// 模块C取消订阅
subscriberC.unSubscribe();

// 再次发布事件eventX，模块C不会再收到消息了
eventbus.publish("eventX", { msg: "EventX published again!" }, 2);
