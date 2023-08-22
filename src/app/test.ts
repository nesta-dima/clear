export function displayDriverLicense(licenseState: string | undefined, licenseNumber: string | undefined) {
	// const state = licenseState ?? '';
	// const number = licenseNumber ?? '';
	// return state || number || '-';
	// return licenseState ?? ('' + (licenseNumber ? ' ' + licenseNumber : '') || '-');
	return licenseState || licenseNumber ? [licenseState, licenseNumber].filter((v) => v).join(' ') : '-';
}

export function incidentLocation(incident: { location: { address: string; city: string; state: any; zipCode: any } }) {
	const { location } = incident || {};
	const { address, city, state, zipCode } = location || {};

	const parts = [address, city, zipCode].filter((el) => el);

	if (state) {
		parts.splice(2, 1, zipCode ? `${state} ${zipCode}` : state);

		return parts.join(', ');
	}
	return parts.join(', ');
}
