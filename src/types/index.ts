// ьазовые модели
export interface ICatalogueModel {
    items: IProduct[];
    setItems(items: IProduct[]): void;
    getProduct(id: string): IProduct | null;
    has(id: string): boolean;
}

export interface IProduct {
    id: string;
    title: string;
    price: number | null;
}

export interface IBasketModel {
    items: Map<string, number>;
    add(id: string): void;
    remove(id: string): void;
    clear(): void;
}


// оформление заказа
export type ICheckoutField = {
    value: string | null;
    setValue: (value: string) => void;
};

export interface ICheckoutStep {
    isValid(): boolean;
    getErrorMessage(): string | null;
}

export interface ICheckoutStepOne extends ICheckoutStep {
    paymentMethod: ICheckoutField;
    deliveryAddress: ICheckoutField;
}

export interface ICheckoutStepTwo extends ICheckoutStep {
    email: ICheckoutField;
    phone: ICheckoutField;
}

export interface ICheckoutModel {
    stepOne: ICheckoutStepOne;
    stepTwo: ICheckoutStepTwo;
    isCheckoutComplete(): boolean;
    submitOrder(): Promise<void>;
    resetCheckout(): void;
}

// модальные окна
export interface IModal extends IView {
    open(data?: object): void; 
    close(): void;
    setNextStepEnabled(isEnabled: boolean): void;
    onClose(callback: () => void): void;
    onNext(callback: () => void): void;
}

// отображение
export interface IViewConstructor {
    new (container: HTMLElement, events?: IEventEmitter): IView;
}

export interface IView {
    render(data?: object): HTMLElement;
}