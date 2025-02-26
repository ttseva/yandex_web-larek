// ьазовые модели
interface ICatalogueModel {
    items: IProduct[];
    setItems(items: IProduct[]): void;
    getProduct(id: string): IProduct | null;
    has(id: string): boolean;
}

interface IProduct {
    id: string;
    title: string;
    price: number | null;
}

interface IBasketModel {
    items: Map<string, number>;
    add(id: string): void;
    remove(id: string): void;
    clear(): void;
}


// оформление заказа
interface ICheckoutField {
    value: string | null;
    setValue(value: string): void;
}

interface ICheckoutStep {
    isValid(): boolean;
    getErrorMessage(): string | null;
}

interface ICheckoutStepOne extends ICheckoutStep {
    paymentMethod: ICheckoutField;
    deliveryAddress: ICheckoutField;
}

interface ICheckoutStepTwo extends ICheckoutStep {
    email: ICheckoutField;
    phone: ICheckoutField;
}

interface ICheckout {
    stepOne: ICheckoutStepOne;
    stepTwo: ICheckoutStepTwo;
    isCheckoutComplete(): boolean;
    submitOrder(): Promise<void>;
    resetCheckout(): void;
}

// модальные окна
interface IModal extends IView {
    open(data?: object): void; 
    close(): void;
    setNextStepEnabled(isEnabled: boolean): void;
    onClose(callback: () => void): void;
    onNext(callback: () => void): void;
}

// отображение
interface IViewConstructor {
    new (container: HTMLElement, events?: IEventEmitter): IView;
}

interface IView {
    render(data?: object): HTMLElement;
}