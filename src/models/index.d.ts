import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Email, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Email, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Email = LazyLoading extends LazyLoadingDisabled ? EagerEmail : LazyEmail

export declare const Email: (new (init: ModelInit<Email>) => Email) & {
  copyOf(source: Email, mutator: (draft: MutableModel<Email>) => MutableModel<Email> | void): Email;
}

type EagerHash = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hash, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHash = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hash, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hash = LazyLoading extends LazyLoadingDisabled ? EagerHash : LazyHash

export declare const Hash: (new (init: ModelInit<Hash>) => Hash) & {
  copyOf(source: Hash, mutator: (draft: MutableModel<Hash>) => MutableModel<Hash> | void): Hash;
}

type EagerSalt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Salt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySalt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Salt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Salt = LazyLoading extends LazyLoadingDisabled ? EagerSalt : LazySalt

export declare const Salt: (new (init: ModelInit<Salt>) => Salt) & {
  copyOf(source: Salt, mutator: (draft: MutableModel<Salt>) => MutableModel<Salt> | void): Salt;
}

type EagerS3Key = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<S3Key, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyS3Key = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<S3Key, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type S3Key = LazyLoading extends LazyLoadingDisabled ? EagerS3Key : LazyS3Key

export declare const S3Key: (new (init: ModelInit<S3Key>) => S3Key) & {
  copyOf(source: S3Key, mutator: (draft: MutableModel<S3Key>) => MutableModel<S3Key> | void): S3Key;
}