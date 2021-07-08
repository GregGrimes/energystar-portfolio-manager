export const buildPostParams = ( username, firstName, lastName ) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <account>
        <username>${username}</username>
        <password>Password385$</password>
        <webserviceUser>true</webserviceUser>
        <searchable>false</searchable>
        <billboardMetric>score</billboardMetric>
        <contact>
              <firstName>${firstName}</firstName>
              <lastName>${lastName}</lastName>
              <address address1="123 Main St" city="Arlington" state="VA" postalCode="22201" country="US"/>
              <email>john_doe@acme.com</email>
              <jobTitle>Building Administrator Data Exchange User</jobTitle>
              <phone>703-555-2121</phone>
        </contact>
        <organization name="ACME Corporation">
              <primaryBusiness>Other</primaryBusiness>
              <otherBusinessDescription>other</otherBusinessDescription>
              <energyStarPartner>true</energyStarPartner>
              <energyStarPartnerType>Service and Product Providers</energyStarPartnerType>
        </organization>
    </account>`;
};