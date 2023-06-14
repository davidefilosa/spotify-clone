import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }
  const { data: SongData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);
  return SongData.publicUrl;
};

export default useSongUrl;
