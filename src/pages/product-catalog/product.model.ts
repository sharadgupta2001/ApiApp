
export interface Organisation {
    parentGroupName: string;
    brandName: string;
    brandId: string;
}

export interface Product {
    productType: string;
    productName: string;
    productSegment: string;
    productIdentifier: string;
    productDescription: string;
    ATMLimit: string;
    tAndCs: string[];
    accessChannels: string[];
    cardType: string;
    contactless: string;
    mobileWallet: string[];
    cardNotes: string[];
    chequebookAvailable: string;
    isCreditCheckPerformed: string;
    creditScoringAccount: any[];
    creditScoringType: string;
    creditScoringDetails: string;
    creditScoringIdVerification: string;
    maximumMonthlyCharge: string;
    productUrl: string[];
    currency: string[];
}

export interface Card {
    paymentSchemeExchangeRate: string;
    exchangeRateAdjustment: string;
    paymentSchemeExchangeFeeRate: any[];
    nonSterlingTransactionFee: any[];
    nonSterlingTransactionfeeRate: any[];
    nonSterlingPurchaseFee: any[];
    nonSterlingPurchaseFeeRate: any[];
    nonSterlingCashFee: any[];
    nonSterlingCashFeeRate: any[];
    foreignPurchaseFee: any[];
    foreignPurchaseFeeRate: any[];
    foreignCashFee: any[];
    foreignCashFeeRate: any[];
}

export interface Eligibility {
    ageRestricted: string;
    minimumAge: string;
    maximumAge: string;
    otherFinancialHolding: string;
    eligibilityDescription: string;
    incomeRelated: string;
    singleJointIncome: string;
    minimumIncomeAmount: string;
    minimumIncomeCurrency: string;
    minimumIncomeTimePeriod: string;
    waysMinIncomePaidIn: string;
    minIncomePaidAccountMonth: string;
    annualCompanyTurnover: string;
    annualCompanyTurnoverCurrency: string;
    residencyRestricted: string;
    residencyRegion: string;
    maxNoOfAccounts: string;
    ThirdSectorOrganisations: string;
    minimumDeposit: string;
    openingDepositMinAmount: any[];
    openingDepositMinCurrency: string;
    maximumOpeningAmount: string;
    openingDepositMaximumAmount: any[];
    openingDepositMaxCurrency: string;
    eligibilityName: string;
    eligibilityType: string;
    eligibilityNotes: string[];
    previousBankruptcy: string;
    marketingEligibility: any[];
}

export interface Fee {
    feeType: string[];
    feeSubType: any[];
    startPromotion: string;
    stopPromotion: string;
    lengthPromotional: string;
    dateOfChange: string;
    frequency: string[];
    feeAmount: string[];
    feeRate: any[];
    negotiable: string[];
    representativeRate: string;
    feeLowerTier: any[];
    feeHigherTier: any[];
    feeAndCharges: string[];
}

export interface CreditInterest {
    creditCharged: string;
    interestRateType: any[];
    startDate: any[];
    period: any[];
    endDate: string;
    calculationFrequency: string;
    paymentMethod: any[];
    fixedInterestLength: string;
    fixedInterestUnit: any[];
    calculationMethod: any[];
    interestTier: string;
    tierValueMaximum: string;
    tierValueMinimum: string;
    rate: any[];
    rateComparisionType: any[];
    interestNotes: string;
    interestSubType: any[];
    startPromotion: any[];
    stopPromotion: any[];
    lengthPromotional: any[];
    dateOfChange: any[];
}

export interface Overdraft {
    overdraftEligibility: string;
    interestTierSME: string;
    interestTierPersonal: string;
    tierValueMinimum: string;
    tierValueMaximum: string;
    interestRateGross: string;
    interestNotes: string;
    totalOverDraftChargeAmount: string;
    maxUnarrangedOverdraftAmount: any[];
    minUnarrangedOverdraftAmount: string;
    dailyOverdraftFeeCap: string;
    monthlyOverdraftFeeCap: string;
    arrangedOverdraftInterestTiers: string;
    interestRate: any[];
    interestRateCalculationFrequency: any[];
    unArrangedOverdraftInterestTiers: string;
    representative: any[];
    dailyCharge: any[];
    monthlyCharge: any[];
    itemCharge: any[];
    otherCharge: any[];
    unArrangedDailyCharge: string[];
    unArrangedMonthlyCharge: any[];
    unArrangedItemCharge: any[];
    unArrangedOtherCharge: any[];
    overdraftNotes: string[];
    ratesAreNegotiable: any[];
    representativeRate: any[];
    bufferAmount: any[];
    commited: any[];
    term: any[];
    setUpFeesAmount: any[];
    setUpFeesRate: any[];
    reviewFee: any[];
    minimumFee: any[];
    interestTierSubType: any[];
    startPromotion: any[];
    stopPromotion: any[];
    lengthPromotional: any[];
    dateOfChange: any[];
    unAuthorizedFee: any[];
    unAuthorizedFeeCap: any[];
}

export interface Benefits {
    featureType: string[];
    featureName: string[];
    featureDescription: string[];
    featureValue: any[];
    defaultToAccounts: string[];
    benefitId: any[];
    benefitType: any[];
    criteriaType: any[];
    minimumCriteria: any[];
    maximumCriteria: any[];
    counter: any[];
    description: any[];
    endDate: any[];
    promotionStartDate: any[];
    promotionEndtDate: any[];
    benefitSubType: string;
    startPromotion: any[];
    stopPromotion: any[];
    lengthPromotional: any[];
    dateOfChange: any[];
}

export interface ProductInfo {
    organisation: Organisation;
    product: Product;
    card: Card;
    eligibility: Eligibility;
    fee: Fee[];
    creditInterest: CreditInterest;
    overdraft: Overdraft;
    benefits: Benefits;
}