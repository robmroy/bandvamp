class Song < ApplicationRecord
    has_one_attached :audio_file
    validates :album_id, :name, presence: true
    validate :require_audio_file
    belongs_to :album,
    class_name: :Album,
    foreign_key: :album_id


    def require_audio_file
        if !self.audio_file.attached?
            file = File.open('app/assets/images/parallel_cropped.png')
            self.audio_file.attach(io: file, filename: '345892746528734589234728')
        end
    end
end
