import {RemoveUrlQueryParams} from "@/types";
import qs from "query-string";

export function formUrlQuery({
  params,
  updates,
}: {
  params: string;
  updates: Record<string, string | undefined>;
}) {
  const currentUrl = qs.parse(params);

  Object.keys(updates).forEach((key) => {
    if (updates[key] === undefined) {
      delete currentUrl[key];
    } else {
      currentUrl[key] = updates[key];
    }
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {skipNull: true}
  );
}

export function removeKeysFromQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {skipNull: true}
  );
}
