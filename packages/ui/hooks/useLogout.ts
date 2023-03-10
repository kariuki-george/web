import { useRouter } from "next/router";
import { useCallback } from "react";
import { API_ROUTES } from "../types/shared/api";
import useFetchApi from "../hooks/useFetchApi";

import { NOTIFICATION_TYPE } from "../types/shared/notification";
import useI18n from "./useI18n";

const useLogout = () => {
  const fetchApi = useFetchApi();
  const router = useRouter();
  ();
  const logoutSuccess = i18n("account.logout.success");
};

export default useLogout;
