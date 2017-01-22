export interface Location {
    StreetName: string;
    PostCode: string;
    TownName: string;
    Country: string;
    TelephoneNumber: string;
    Latitude: number;
    Longitude: number;
}

export interface Availability {
    MondayOpeningTime: string;
    TuesdayOpeningTime: string;
    WednesdayOpeningTime: string;
    ThursdayOpeningTime: string;
    FridayOpeningTime: string;
    SaturdayOpeningTime: string;
    SundayOpeningTime: string;
    MondayClosingTime: string;
    TuesdayClosingTime: string;
    WednesdayClosingTime: string;
    ThursdayClosingTime: string;
    FridayClosingTime: string;
    SaturdayClosingTime: string;
    SundayClosingTime: string;
}

export interface ServicesFacilities {
    AtmAtBranch: boolean;
}

export interface Branch {
    ParentGroupName: string;
    ParentGroupId: string;
    OrganisationName: string;
    OrganisationId: string;
    BranchId: string;
    BranchName: string;
    BranchType: string;
    Location: Location;
    Availability: Availability;
    ServicesFacilities: ServicesFacilities;
}