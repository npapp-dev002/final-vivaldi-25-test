/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 */
import type { RequiredContext } from '@vivaldi/config';
import { destinations } from '@repo/bff/contracts';

export interface Context extends RequiredContext {
  greeting: string;
}

export const createContext: () => Promise<Context> = async () => ({
  destinations,
  greeting: 'Hello',
});
